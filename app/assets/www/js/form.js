document.addEventListener("deviceready", onDeviceReady, false);
var db = null;
var inserted = false;
var lock = true; // if true, must wait
var querySuccessful = true;
var scheduledTask = cordova.require("cordova/plugin/scheduledtask");
var template= undefined;

function onDeviceReady() {
	$("#form-tools .btn").addClass("disabled");
	db = window.openDatabase("edanRapido", "1.0", "EDÁN Rápido", 10000000);
	if (window.localStorage.getItem("edanrapidoformid") == -1) {
		db.transaction(getFormID, errorCB, null);
	} else {
		inserted = true;
		$("#form-tools .btn").removeClass("disabled");
	}

	document.addEventListener("backbutton", function(e) {
		navigator.notification.confirm(
			"\xBFDesea descartar los cambios que ha hecho?",
		discard,
			"Cuidado",
			"No,Si");
	}, false);

	start();
}

function start() {
	setOverlayDimensions();
	window.onbeforeunload = clearlocalstorage;

	var action = window.localStorage.getItem("edanrapidoformaction");
	template = window.localStorage.getItem("edanrapidoformtemplate");
	serverAddress = window.localStorage.getItem("edanrapidoserveraddress");

	$("div#header h1").text(jhEngine.getFullName(template));
	if (action == "LOAD") {
		db.transaction(function(tx) {
			tx.executeSql("SELECT form_data FROM form_data WHERE data_id = ?", [window.localStorage.getItem("edanrapidoformid")], loadForm, errorCB);
		}, errorCB, null);

	} else {
		loadBlank(template);
		$("#overlay").css("display", "none");
	}

	$.ajaxSetup({
		async: false,
		type: 'POST',
		dataType: 'json',
	});

	$("#save-draft").click(savedraft);
	$("#save-send").click(saveAndSend);
}

function saveAndSend() {

	if (confirm("\xBFDesea enviar los datos actuales al servidor?")) {

		if ($(this).hasClass("disabled")) {
			return;
		}

		// Verifica que haya conexión
		var ping = false;
		$.ajax({
			url: serverAddress + '/ping.php',
			success: function(data, textStatus, xhr) {
				if (data.success) ping = true;
			},
		});

		savedraft();

		// Trata de enviar
		if (ping) {
			$.ajax({
				url: serverAddress + '/submit.php',
				type: 'POST',
				dataType: 'json',
				data: {
					user_id: window.localStorage.getItem("edanrapidophonenumber"),
					type_id: window.localStorage.getItem("edanrapidoformtype"),
					sub_data: $("#form-holder form").formToJSON(),
					form_id: window.localStorage.getItem("edanrapidoformid"),
				},
				success: function(data, textStatus, xhr) {
					if (data.success) {
						db.transaction(

						function(tx) {
							tx.executeSql("UPDATE form_data SET " +
								"rev_last_sent = rev_last_saved " +
								"WHERE data_id=" + window.localStorage.getItem("edanrapidoformid"), [],
							function(tx) {
								tx.executeSql("DELETE FROM pending_forms WHERE data_id=" + window.localStorage.getItem("edanrapidoformid"));
							}, errorCB);
						},
						errorCB,
						null);

						navigator.notification.alert("Formulario enviado exitosamente al servidor.\n Se ha guardado una copia en el tel\xE9fono para que pueda enviar nuevas revisiones del formulario si lo desea.",
						null,
							"Env\xEDo exitoso",
							"OK");
						window.localStorage.setItem("edanrapidoformid", data.form_id);
					} else {
						navigator.notification.alert(data.error, null, 'Error', 'OK');
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					navigator.notification.alert("No se obtuvo respuesta del servidor.\nEl sistema intentar\xE1 enviar el formulario autom\xE1ticamente.\nStatus de la conexi\xF3n: " + xhr.status,
					scheduledTaskProcess,
					// null,
					"Error",
						"OK");
				},
				// statusCode: {
				// 	404: function(){alert("not found");},
				// },
			});

		}
		// Notifica si no se pudo conectar desde el principio.
		else {
			navigator.notification.alert("No se pudo contactar al servidor. El sistema intentar\xE1 enviar el formulario autom\xE1ticamente.",
			scheduledTaskProcess,
			// null,
			"No hay comunicaci\xF3n",
				"OK");
		}

	}

}

function savedraft() {
	$("#form-tools .btn").addClass("disabled");
	$("#overlay").show();
	lock = true;
	window.setTimeout(saveDraft(), 2000);
}

function saveDraft() {
	if ($(this).hasClass("disabled")) {
		return;
	}

	// $("#form-tools .btn").addClass("disabled");
	// $("#overlay").show();

	if (!inserted) {
		var formname = prompt("Ingrese un nombre para identificar el formulario.");
		if (formname) formname = formname.trim();
		while (!formname) {
			formname = prompt("Ingrese un nombre para identificar el formulario.");
			if (formname) formname = formname.trim();
		}
		window.localStorage.setItem("edanrapidoformname", formname);
		db.transaction(insertRow, errorCB, null);
	} else {
		db.transaction(sqlDraft, draftError, null);
	}

	// $("#form-tools .btn").removeClass("disabled");
	// $("#overlay").hide();
}

function setFormID(tx, results) {
	var fid = parseInt(results.rows.item(0).form_id);
	fid = fid ? fid : 0;
	window.localStorage.setItem("edanrapidoformid", fid + 1);
	$("#form-tools .btn").removeClass("disabled");
}

function insertRow(tx) {
	tx.executeSql("INSERT INTO form_data(data_id,type_id,form_name) VALUES(" + window.localStorage.getItem("edanrapidoformid") + "," + window.localStorage.getItem("edanrapidoformtype") + ", ?)", [window.localStorage.getItem("edanrapidoformname")], sqlDraft, insertError);
}

function sqlDraft(tx) {
	inserted = true;
	tx.executeSql("UPDATE form_data SET " +
		"rev_last_saved = datetime('now'), " +
		"form_data = ? " +
		"WHERE data_id=" + window.localStorage.getItem("edanrapidoformid"), [$("#form-holder form").formToJSON()], draftSuccess, errorCB);
}

function getFormID(tx) {
	tx.executeSql("SELECT MAX(data_id) AS form_id FROM form_data", [], setFormID, errorCB);
}

function draftSuccess() {
	navigator.notification.alert("El formulario se ha guardado en la memoria del tel\xE9fono",
	null,
		"Guardado exitoso",
		"OK");
	$("#form-tools .btn").removeClass("disabled");
	$("#overlay").hide();
	lock = false;
}

function loadBlank(template) {
	jhEngine.renderBlank(template);
}

function loadForm(tx, results) {

	if (results.rows.length != 1) {
		alert("No se encontró la data del formulario.");
		return;
	}

	var template = window.localStorage.getItem("edanrapidoformtemplate");
	var json = results.rows.item(0).form_data;

	jhEngine.renderData(template, json);
	$("#overlay").css("display", "none");
}

function clearlocalstorage() {
	window.localStorage.setItem("edanrapidoformaction", null);
	window.localStorage.setItem("edanrapidoformtemplate", null);
	window.localStorage.setItem("edanrapidoformjson", null);
	window.localStorage.setItem("edanrapidoformtype", null);
	window.localStorage.setItem("edanrapidoformid", null);
	window.localStorage.setItem("edanrapidoformname", null);
}

function setOverlayDimensions() {
	$("#overlay").height($("#content").outerHeight());
	$("#overlay").width($("#content").outerWidth());
	$("#overlay").offset($("#content").offset());
}

function errorCB(err) {
	alert("Error processing SQL: " + err.message);
	$("#form-tools .btn").removeClass("disabled");
	$("#overlay").hide();
}

function insertError(err) {
	alert("Error processing SQL: " + err.message);
	$("#form-tools .btn").removeClass("disabled");
	$("#overlay").hide();
}

function draftError(err) {
	navigator.notification.alert("No se ha podido guardar el formulario localmente. C\xF3digo de error: " + err.code,
	null,
		"Error en Guardado",
		"OK");
	$("#form-tools .btn").removeClass("disabled");
	$("#overlay").hide();

}

function scheduledTaskProcess() {
	db.transaction(function(tx) {
		tx.executeSql("SELECT data_id FROM pending_forms WHERE data_id = ?", [window.localStorage.getItem("edanrapidoformid")], pushPendingForm, errorCB);
	}, errorCB, null);
}

function pushPendingForm(tx, results) {
	if (results.rows.length == 0) {
		tx.executeSql("INSERT INTO pending_forms(data_id) VALUES(" + window.localStorage.getItem("edanrapidoformid") + ")", [], scheduleTask, insertError);
	} else {
		scheduleTask();
	}
}

function scheduleTask() {
	scheduledTask.get(function(result) {
		navigator.notification.alert("Usted no necesitar\xE1 re-intentar el env\xEDo. Puede regresar a usar su tel\xE9fono normalmente.",
		null,
			"Env\xEDo Autom\xE1tco",
			"OK")

	}, function() {
		navigator.notification.alert("No se ha podido iniciar el proceso de env\xEDo autom\xE1tco de formularios.",
		null,
			"Error",
			"OK");

	});
}