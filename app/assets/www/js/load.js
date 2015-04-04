document.addEventListener("deviceready", onDeviceReady, false);
var db = null;

function onDeviceReady() {
	document.addEventListener("backbutton", goBack, false);

	db = window.openDatabase("edanRapido", "1.0", "EDÁN Rápido", 10000000);
	db.transaction(loadPending, errorCB, null);
	db.transaction(loadSent, errorCB, null);

	// $(".form-caller").click(callTemplate);
	$(document).delegate(".form-caller", "click", callTemplate);
}

function loadPending(tx) {
	tx.executeSql("SELECT fd.data_id, fd.form_name, strftime('%d/%m/%Y %H:%M', fd.rev_last_saved) AS rev_last_saved, strftime('%d/%m/%Y %H:%M', fd.rev_last_sent) AS rev_last_sent, fd.form_data, ft.* FROM form_data fd JOIN form_types ft ON fd.type_id = ft.type_id WHERE rev_last_sent IS NULL OR rev_last_sent <> rev_last_saved ORDER BY strftime('%s', rev_last_sent) ASC, strftime('%s', rev_last_saved) DESC", [], displayPending, errorCB);
}

function loadSent(tx) {
	tx.executeSql("SELECT fd.data_id, fd.form_name, strftime('%d/%m/%Y %H:%M', fd.rev_last_saved) AS rev_last, fd.form_data, ft.* FROM form_data fd JOIN form_types ft ON fd.type_id = ft.type_id WHERE rev_last_sent = rev_last_saved ORDER BY strftime('%s', rev_last_sent) DESC", [], displaySent, errorCB);
}

function displayPending(tx, results) {
	for(var i = 0; i < results.rows.length; i++){
		var row = results.rows.item(i);
		var templatename = jhEngine.getFullName(row.type_name);
		var div = "<div class='btn form-caller' form='"+row.type_name+"' type='"+row.type_id+"' formid='"+row.data_id+"'><label><p><b>"+templatename+"</b></p><p>"+row.form_name+"</p><p>Guardado: "+row.rev_last_saved+"</p>"+(row.rev_last_sent?"<p>Enviado: "+row.rev_last_sent+"</p>":"")+"</label></div>";
		$("#pending").html($("#pending").html() + div);
	}
	if( results.rows.length == 0 ){
		$("#pending").html("No hay formularios pendientes de envio.");
	}
}

function displaySent(tx, results) {
	for(var i = 0; i < results.rows.length; i++){
		var row = results.rows.item(i);
		var templatename = jhEngine.getFullName(row.type_name);
		var div = "<div class='btn form-caller' form='"+row.type_name+"' type='"+row.type_id+"' formid='"+row.data_id+"'><label><p><b>"+templatename+"</b></p><p>"+row.form_name+"</p><p>"+row.rev_last+"</p></label></div>";
		$("#sent").html($("#sent").html() + div);
	}
	if( results.rows.length == 0 ){
		$("#sent").html("No hay formularios enviados.");
	}
}

function errorCB(err) {
	querySuccessful = false;
	alert("Error processing SQL: " + err.message);
	$("#form-tools .btn").removeClass("disabled");
	$("#overlay").hide();
}

function callTemplate() {
	window.localStorage.setItem("edanrapidoformaction", "LOAD");
	window.localStorage.setItem("edanrapidoformtemplate", $(this).attr("form"));
	window.localStorage.setItem("edanrapidoformtype", $(this).attr("type"));
	window.localStorage.setItem("edanrapidoformid", parseInt($(this).attr("formid")));
	location.href = "form.html";
}