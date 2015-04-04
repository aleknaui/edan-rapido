// ---------------------------------------------------------------------
// Manejador de las transformaciones
// (especialmente de inicialización de un formulario en base a su plantilla)
// ---------------------------------------------------------------------

/* Clase que ejecuta las inicializaciones de formularios y contiene
 * la información de las plantillas.
 */
var jhEngine = {
	/* Plantillas JSON (se agregan en jh-templates.js)
	 * Cada plantilla es un objeto que contiene por lo menos 2 atributos:
	 * 		transformation: La plantilla de transformación JSON
	 * 		blank: Un JSON en blanco sobre el cual generar plantillas nuevas
	 * Opcional
	 * 		init: Una función a ejecutar al terminar de generar el formulario
	 */
	templates: new Array(),

	/* Función que inicializa un formulario en blanco
	 * PARÁMETROS
	 * 	template: el nombre de la plantilla a utilizar (String)
	 * RETORNO
	 * 	true: Si se hizo exitosamente
	 * 	false: En caso de error
	 */
	renderBlank: function(template) {
		// Si hay una transformación y un blank con el nombre indicado.
		if (this.templates[template] && this.templates[template].transformation && this.templates[template].blank) {
			data = this.templates[template].blank;
			$("#form-holder").html("");
			$("#form-holder").json2html(this.templates[template].blank, this.templates[template].transformation);
			if (this.templates[template].init) this.templates[template].init();
			return true;
		} else return false;
	},

	/* Función que genera un formulario con datos ya ingresados y almacenados en JSON
	 * PARÁMETROS
	 * 	template: el nombre de la plantilla a utilizar (String)
	 * 	data: la información que se desea que contenga el formulario
	 * RETORNO
	 * 	true: Si se hizo exitosamente
	 * 	false: En caso de error
	 */
	renderData: function(template, data) {
		if (this.templates[template] && this.templates[template].transformation) {
			$("#form-holder").html("");
			$("#form-holder").json2html(data, this.templates[template].transformation);
			if (this.templates[template].init) this.templates[template].init();
			return true;
		} else return false;
	},

	// Función que obtiene el nombre completo del formulario
	getFullName: function(template) {
		if (this.templates[template] && this.templates[template].fullname) {
			return this.templates[template].fullname;
		} else return false;
	},

	renderSnippet: function(data, snippet) {
		return jQuery("<div />").json2html(data, snippet).html();
	},

	fields: {

		form: function(children) {
			return {
    			"tag": "form",
    			"children": children
			};
		},

		sectionChooser: function(sections) {
			var options = [{
				"tag": "option",
				"value": "",
				"html": "Seleccione una p\xE1gina para ingresar datos"
			}];
			$.each(sections, function(){
				options.push({
					"tag": "option",
					"value": this.value+"",
					"html": this.name
				});
			});
			return {
				"tag": "div",
				"id": "sectionChooser",
				"children": [{
					"tag": "select",
					"children": options
				}]
			};
		},

		section: function(name, content) {
			return {
				"tag": "div",
				"id": name,
				"class": "section",
				children: content
		  	};
		},

		textField: function(name, path, maxlength) {
			var input = {
				"tag": "input",
				"type": "text",
				"name": path,
				"value": "${"+path+"}",
				"placeholder": name,
			};
			if(maxlength) input.maxlength = maxlength+"";
			return {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "label",
					"html": name
				}, input]
			};
		},

		numberField: function(name, path, maxlength) {
			var input = {
				"tag": "input",
				"type": "number",
				"name": path,
				"value": "${"+path+"}",
				"placeholder": name,
			};
			if(maxlength) input.maxlength = maxlength+"";
			return {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "label",
					"html": name
				}, input]
			};
		},

		dimensionalField: function(name, path, dimensional, maxlength) {
			var input = {
				"tag": "input",
				"type": "number",
				"name": path,
				"value": "${"+path+"}",
				"placeholder": "#",
			};
			if(maxlength) input.maxlength = maxlength+"";
			return {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "label",
					"html": name
				}, input, {
					"tag": "label",
					"class": "dimensional",
					"html": dimensional
				}]
			};
		},

		textareaField: function(name, path) {
			return {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "label",
					"html": name
				}, {
					"tag": "textarea",
					"type": "text",
					"name": path,
					"value": "${"+path+"}",
					"placeholder": name,
				}]
			};
		},

		selectField: function(name, path, options) {
			var options_ = [{
				"tag": "option",
				"value": "",
				"html": name
			}];
			$.each(options, function(){
				options_.push({
					"tag": "option",
					"value": this.value+"",
					"html": this.name
				});
			});
			return {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "label",
					"html": name
				}, {
					"tag": "select",
					"name": path,
					"val": "${"+path+"}",
					"children": [options_]
				}]
			};
		},

		dateField: function(name, path, includeTime) {
			var date = {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "label",
					"html": name
				}, {
					"tag": "input",
					"type": "number",
					"name": path+".dia",
					"value": "${"+path+".dia}",
					"placeholder": "D\xEDa",
					"maxlength": "2",
					"class": "day",
				}, {
					"tag": "span",
					"html": "/"
				}, {
					"tag": "select",
					"class": "month",
					"name": path+".mes",
					"val": "${"+path+".mes}",
					"children": [{
						"tag": "option",
						"value": "",
						"html": "Mes"
					}, {
						"tag": "option",
						"value": "1",
						"html": "Enero"
					}, {
						"tag": "option",
						"value": "2",
						"html": "Febrero"
					}, {
						"tag": "option",
						"value": "3",
						"html": "Marzo"
					}, {
						"tag": "option",
						"value": "4",
						"html": "Abril"
					}, {
						"tag": "option",
						"value": "5",
						"html": "Mayo"
					}, {
						"tag": "option",
						"value": "6",
						"html": "Junio"
					}, {
						"tag": "option",
						"value": "7",
						"html": "Julio"
					}, {
						"tag": "option",
						"value": "8",
						"html": "Agosto"
					}, {
						"tag": "option",
						"value": "9",
						"html": "Septiembre"
					}, {
						"tag": "option",
						"value": "10",
						"html": "Octubre"
					}, {
						"tag": "option",
						"value": "11",
						"html": "Noviembre"
					}, {
						"tag": "option",
						"value": "12",
						"html": "Diciembre"
					}]
				}, {
					"tag": "span",
					"html": "/"
				}, {
					"tag": "input",
					"type": "number",
					"name": path+".anio",
					"value": "${"+path+".anio}",
					"placeholder": "A\xF1o",
					"maxlength": "4",
					"class": "year"
				}]
			};
			var time = {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "input",
					"type": "number",
					"name": path+".hora",
					"value": "${"+path+".hora}",
					"placeholder": "Hora",
					"maxlength": "2",
					"class": "hour"
				}, {
					"tag": "span",
					"html": ":"
				}, {
					"tag": "input",
					"type": "number",
					"name": path+".minutos",
					"value": "${"+path+".minutos}",
					"placeholder": "Min.",
					"maxlength": "2",
					"class": "minutes"
				}]
			};
			var field = {
				"tag": "div",
				"class": "datefield",
				"children": []
			}
			field.children.push(date);
			if(includeTime) field.children.push(time);
			field.children.push({
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "div",
					"class": "btn",
					"html": "Obtener fecha y hora actuales"
				}]
			});
			return field;
		},

		locationField: function(name, path) {
			return {
				"tag": "div",
				"class": "row",
				"children": [{
					"tag": "div",
					"class": "coordenadas",
					"children": [{
						"tag": "label",
						"html": name
					}, {
						"tag": "label",
						"html": "Latitud"
					}, {
						"tag": "input",
						"type": "number",
						"name": path+".latitud",
						"value": "${"+path+".latitud}",
						"placeholder": "Latitud",
						"class": "latitud"
					}, {
						"tag": "label",
						"html": "Longitud"
					}, {
						"tag": "input",
						"type": "number",
						"name": path+".longitud",
						"value": "${"+path+".longitud}",
						"placeholder": "Longitud",
						"class": "longitud"
					}, {
						"tag": "div",
						"class": "btn",
						"html": "Obtener coordenadas"
					}]
				}]
			};
		},

		cameraField: function(name, path) {
			return [{
				"tag": "h1",
				"html": name
			}, {
				"tag": "div",
				"class": "camera",
				"children": [{
					"tag": "img",
					"name": path,
					"src": "${"+path+"}",
				}, {
					"tag": "div",
					"class": "btn",
					"html": "Tomar fotograf\xEDa"
				}]
			}];
		},

		filterField: function(name, path, listname) {
			return {
				"tag": "div",
				"class": "row giant-list",
				"list": listname,
				"children": [{
					"tag": "label",
					"html": name
				},{
					"tag": "input",
					"type": "text",
					"name": path,
					"value": "${"+path+"}"
				},{
					"tag": "div",
					"class": "options",
					"children":[{
						"tag":"ul",
						"children": util.itemsList(CONRED[listname])
					}]
				}]
			};
		},

		checkboxFields: function(name, options){
			var rows = [{
				"tag": "h1",
				"html": name
			}];
			$.each(options, function(){
				var input = {
					"tag": "input",
					"type": "checkbox",
					"name": this.path,
					"value": "${"+this.path+"}",
				};
				if(this.other){
					input.class="enable-other";
				}
				rows.push({
					"tag": "div",
					"class": "row tickr",
					"children": [input, {
						"tag": "label",
						"html": this.name
					}]
				});
				if(this.other) {
					rows.push(this.other);
				}
			});
			return {
				"tag": "div",
				"class": "radiogroup",
				"children": rows
			};
		},

		radioFields: function(name, path, options) {
			var rows = [{
	          "tag": "h1",
	          "html": name
	        }];
			$.each(options, function(){
				var input = {
					"tag": "input",
					"type": "radio",
					"name": path,
					"value": this.value,
				}
				if(this.other){
					input.class="enable-other";
				}
				rows.push({
					"tag": "div",
					"class": "row tickr",
					"children": [input, {
						"tag": "label",
						"html": this.name
					}]
				});
				if(this.other) {
					rows.push(this.other);
				}
			});
			return {
				"tag": "div",
				"class": "radiogroup",
				"val": "${"+path+"}",
				"children": rows
			};
		},

		imageFields: function(name, path, options) {
			var rows = [{
	          "tag": "h1",
	          "html": name
	        }];
			$.each(options, function(){
				var input = {
					"tag": "input",
					"type": "radio",
					"name": path,
					"value": this.value,
					"style": "display: none"
				}
				if(this.other){
					input.class="enable-other";
				}
				rows.push({
					"tag": "div",
					"class": "row tickr",
					"children": [input, {
						"tag": "label",
						"html": this.name
					}, {
						"tag": "img",
						"src": this.img
					}]
				});
				if(this.other) {
					rows.push(this.other);
				}
			});
			return {
				"tag": "div",
				"class": "radiogroup img",
				"val": "${"+path+"}",
				"children": rows
			};
		}

	},

};


// ---------------------------------------------------------------------
// Obtención de JSON a partir de un formulario
// ---------------------------------------------------------------------

/* Override de la funcion $(form).formToJSON de jQuery, obtenida de:
 * http://exceptionallyexceptionalexceptions.blogspot.com/2011/12/convert-html-form-to-json.html
 * Modificaciones: 	Soporte para listas no asociativas
 *					Arreglo para obtener correctamente valores de los siguientes types:
 * 					checkbox, radio, number
 */
$.fn.formToJSON = function() {
	var objectGraph = {};

	function add(objectGraph, name, value, listClass) {
		// if the array is now one element long, we're done
		if (name.length == 1) {
			// agregado: funcionalidad de listas
			if (listClass == "list") {
				if (objectGraph[name[0]] == null) {
					objectGraph[name[0]] = [];
				}
			} else if (listClass == "listElement") {
				objectGraph.push(value);
			} else {
				objectGraph[name[0]] = value;
			}
		}
		//else we've still got more than a single element of depth
		else {
			if (objectGraph[name[0]] == null) {
				//create the node if it doesn't yet exist
				objectGraph[name[0]] = {};
			}
			//recurse, chopping off the first array element
			add(objectGraph[name[0]], name.slice(1), value, listClass);
		}
	};

	//loop through all of the input/textarea elements of the form
	$(this).find('input, textarea, select, .camera img').each(function() {
		//ignore the submit button
		if ($(this).attr('name') != 'submit' && !($(this).attr("type")=="radio" && (!$(this).prop('checked')))) {
			//split the dot notated names into arrays and pass along with the value
			add(
			objectGraph,
			// ---
			$(this).attr('name').split('.'),
			// img?
			$(this).prop("tagName") == "IMG" ? $(this).attr("src") :
			// type = checkbox?
			$(this).attr("type") == "checkbox" ? $(this).prop("checked") :
			// type = number?
			$(this).attr("type") == "number" ? parseFloat($(this).val()) :
			// else
			$(this).val(),
			// ---
			$(this).hasClass("list") ? "list" : $(this).hasClass("listElement") ? "listElement" : "");
		}
	});

	return JSON.stringify(objectGraph);
};

// Utilidades generales
util = {
	sectionSwitch: function() {
		$(".section").hide();
		$(".section").first().show();
		$("#sectionChooser select").change(function(event) {
			if ($(this).val().length > 0) {
				$(".section").hide();
				$("#" + $(this).val()).show();
			}
		});
	},
	setSelectVals: function() {
		$("select").each(function() {
			$(this).val($(this).attr("val"));
			$(this).removeAttr("val");
		});
	},
	setTickrVals: function() {
		$("input[type=checkbox]").each(function(){
			var checked = $(this).attr("value") == "true";
			$(this).prop('checked', checked);
			$(this).removeAttr('value');
		});
		$(".radiogroup").each(function(){
			var selected = $(this).attr("val");
			$(this).find(".tickr").removeClass("selected");
			$(this).find("input[type=radio][value="+selected+"]").first().prop("checked",true).closest(".tickr").addClass("selected");
			$(this).removeAttr('val');
		});
	},
	bindTickrLabels: function() {
		$(".tickr label").click( function() {
			$(this).closest(".radiogroup").find(".tickr").removeClass("selected");
			var tickr = $(this).closest('.tickr').addClass("selected");
			$(tickr).find("input").click();
		});
		$(".tickr img").click( function() {
			$(this).closest(".radiogroup").find(".tickr").removeClass("selected");
			var tickr = $(this).closest('.tickr').addClass("selected");
			$(tickr).find("input").click();
		});
	},
	bindTickrOtherField: function() {
		$(".radiogroup").has(".enable-other").each(function(){
			var tickr = $(this).find(".enable-other");
			var other = $(this).find(".other");

			if(tickr.prop("checked")){
				other.removeAttr('disabled');
			} else{
				other.attr("disabled","disabled");
				other.closest(".row").hide();
			}
		}).find("input[type=radio], input[type=checkbox]").change(function(){
			var other = $(this).closest(".radiogroup").find(".other");
			if($(this).hasClass("enable-other")) {
				other.closest(".row").show();
				other.removeAttr("disabled");
				other.focus();
			} else {
				other.closest(".row").hide();
				other.attr("disabled","disabled");
				other.val("");
			}
		});
	},
	bindDateButton: function() {
		$(".datefield .btn").click(function() {
			var fecha = new Date();
			var datefield = $(this).closest(".datefield");
			datefield.find(".day").val(fecha.getDate());
			datefield.find(".month").val(fecha.getMonth() + 1);
			datefield.find(".year").val(fecha.getFullYear());
			datefield.find(".hour").val(fecha.getHours());
			datefield.find(".minutes").val(fecha.getMinutes());
		});
	},
	bindGPSButton: function() {
		$(".coordenadas .btn").click(function() {
			var coordfield = $(this).closest(".coordenadas");
			navigator.geolocation.getCurrentPosition(

			function(position) {
				coordfield.find(".latitud").val(position.coords.latitude);
				coordfield.find(".longitud").val(position.coords.longitude);
			},

			function(error) {
				alert('code: ' + error.code + '\n' +
					'message: ' + error.message + '\n');
				// navigator.notification.alert("Error de GPS.", null, "Error", "OK");
			});
		});
	},
	bindCameraButton: function() {
		$(".camera .btn").click(function() {
			var field = $(this).closest(".camera");
			navigator.camera.getPicture( function(imageData) {
				var img = field.find("img");
				$(img).attr("src","data:image/jpeg;base64,"+imageData);
			}, function(message) {
				alert("Error de c\xE1mara: "+message);
			}, {
				quality: 50,
				destinationType: 0, // Base 64
				sourceType: 1, // Camara
				encodingType: 0, // JPEG
				mediaType: 0, // Picture
				correctOrientation: true,
				targetHeight: 500,
				targetWidth: 500,
			} );
		})
	},
	itemsList: function(items) {
		var list = [];
		$.each(items,function(){
			list.push({
				"tag":"li",
				"html":this+""
			});
		});
		return list;
	},
	filterList: function(elements, match) {
		var list = [];
		var regex = new RegExp("^"+match, "gi");
		$.each(elements, function(){
			if(this.match(regex)) list.push(this+"");
		});
		return list.sort();
	},
	bindFilterLists: function() {
		$(".giant-list .options").hide();
		$(".giant-list input").keypress(function(evt){
			var val = $(this).val();
			var list = $(this).closest(".giant-list").attr("list");
			list = CONRED[list];
			$(this).closest(".giant-list").find(".options ul").html(jhEngine.renderSnippet({},util.itemsList(util.filterList(list, val))));
			$(".giant-list .options ul li").click(function(){
				$(this).closest(".giant-list").find("input").val($(this).html());
			});
		}).focus(function(){
			$(".giant-list .options").hide();
			$(this).closest(".giant-list").find(".options").show();
		});
		$(".giant-list .options ul li").click(function(){
			$(this).closest(".giant-list").find("input").val($(this).html());
		});
	},
	baseInit: function() {
		util.sectionSwitch();
		util.setSelectVals();
		util.setTickrVals();
		util.bindTickrLabels();
		util.bindTickrOtherField();
		util.bindDateButton();
		util.bindGPSButton();
		util.bindCameraButton();
		util.bindFilterLists();
	}
}