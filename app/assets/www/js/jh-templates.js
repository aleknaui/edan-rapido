// ---------------------------------------------------------------------
// Definici\xF3n de plantillas
// ---------------------------------------------------------------------

jhEngine.templates.edanrapido = {
  fullname: "ED\xC1N R\xE1pido",
  transformation: [{
    "tag": "div",
    "id": "sectionChooser",
    "children": [{
      "tag": "select",
      "children": [{
        "tag": "option",
        "value": "",
        "html": "Seleccione una p\xE1gina para ingresar datos"
      }, {
        "tag": "option",
        "value": "datosGenerales",
        "html": "Datos generales"
      }, {
        "tag": "option",
        "value": "infoIncidente",
        "html": "Informaci\xF3n del incidente"
      }, {
        "tag": "option",
        "value": "registroDanios",
        "html": "Registro de da\xF1os y afectaci\xF3n a personas, habilitaci\xF3n de albergues"
      }, {
        "tag": "option",
        "value": "requerimientos",
        "html": "Requerimientos, instituciones presentes y acciones realizadas"
      }]
    }]
  }, {
    "tag": "form",
    "children": [{
      "tag": "div",
      "id": "datosGenerales",
      "class": "section",
      "children": [{
        "tag": "div",
        "class": "datefield",
        "children": [{
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Fecha de evaluaci\xF3n"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.evaluacion.fecha.dia",
            "value": "${edanRapido.evaluacion.fecha.dia}",
            "placeholder": "D\xEDa",
            "maxlength": "2",
            "class": "day",
            "html": ""
          }, {
            "tag": "span",
            "html": "/"
          }, {
            "tag": "select",
            "class": "month",
            "name": "edanRapido.evaluacion.fecha.mes",
            "val": "${edanRapido.evaluacion.fecha.mes}",
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
            "name": "edanRapido.evaluacion.fecha.anio",
            "value": "${edanRapido.evaluacion.fecha.anio}",
            "placeholder": "A\xF1o",
            "maxlength": "4",
            "html": "",
            "class": "year"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "input",
            "type": "number",
            "name": "edanRapido.evaluacion.fecha.hora",
            "value": "${edanRapido.evaluacion.fecha.hora}",
            "placeholder": "Hora",
            "maxlength": "2",
            "html": "",
            "class": "hour"
          }, {
            "tag": "span",
            "html": ":"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.evaluacion.fecha.minutos",
            "value": "${edanRapido.evaluacion.fecha.minutos}",
            "placeholder": "Min.",
            "maxlength": "2",
            "html": "",
            "class": "minutes"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "div",
            "class": "btn",
            "html": "Obtener fecha y hora actuales"
          }]
        }]
      }, {
        "tag": "div",
        "class": "datefield",
        "children": [{
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Fecha del incidente"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.fecha.dia",
            "value": "${edanRapido.incidente.fecha.dia}",
            "placeholder": "D\xEDa",
            "maxlength": "2",
            "class": "day",
            "html": ""
          }, {
            "tag": "span",
            "html": "/"
          }, {
            "tag": "select",
            "class": "month",
            "name": "edanRapido.incidente.fecha.mes",
            "val": "${edanRapido.incidente.fecha.mes}",
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
            "name": "edanRapido.incidente.fecha.anio",
            "value": "${edanRapido.incidente.fecha.anio}",
            "placeholder": "A\xF1o",
            "maxlength": "4",
            "html": "",
            "class": "year"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.fecha.hora",
            "value": "${edanRapido.incidente.fecha.hora}",
            "placeholder": "Hora",
            "maxlength": "2",
            "html": "",
            "class": "hour"
          }, {
            "tag": "span",
            "html": ":"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.fecha.minutos",
            "value": "${edanRapido.incidente.fecha.minutos}",
            "placeholder": "Min.",
            "maxlength": "2",
            "html": "",
            "class": "minutes"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "div",
            "class": "btn",
            "html": "Obtener fecha y hora actuales"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Nombre del evaluador"
        }, {
          "tag": "input",
          "type": "text",
          "name": "edanRapido.evaluacion.evaluador.nombre",
          "value": "${edanRapido.evaluacion.evaluador.nombre}",
          "placeholder": "Nombre",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Instituci\xF3n"
        }, {
          "tag": "input",
          "type": "text",
          "name": "edanRapido.evaluacion.evaluador.institucion",
          "value": "${edanRapido.evaluacion.evaluador.institucion}",
          "placeholder": "Instituci\xF3n",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Tel\xE9fono"
        }, {
          "tag": "input",
          "type": "number",
          "name": "edanRapido.evaluacion.evaluador.telefono",
          "value": "${edanRapido.evaluacion.evaluador.telefono}",
          "maxlength": "8",
          "placeholder": "Tel\xE9fono",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Cargo"
        }, {
          "tag": "input",
          "type": "text",
          "name": "edanRapido.evaluacion.evaluador.cargo",
          "value": "${edanRapido.evaluacion.evaluador.cargo}",
          "placeholder": "Cargo",
          "html": ""
        }]
      }]
    }, {
      "tag": "div",
      "id": "infoIncidente",
      "class": "section",
      "children": [{
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Evento generador y sus efectos"
        }, {
          "tag": "textarea",
          "name": "edanRapido.incidente.eventogenerador",
          "value": "${edanRapido.incidente.eventogenerador}",
          "html": " "
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Ubicaci\xF3n"
        }, {
          "tag": "select",
          "name": "edanRapido.incidente.ubicacion.lugarPoblado.categoria",
          "value": "${edanRapido.incidente.ubicacion.lugarPoblado.categoria}",
          "children": [{
            "tag": "option",
            "value": "",
            "html": "Categor\xEDa"
          }, {
            "tag": "option",
            "value": "aldea",
            "html": "Aldea"
          }, {
            "tag": "option",
            "value": "caserio",
            "html": "Caser\xEDo"
          }, {
            "tag": "option",
            "value": "finca",
            "html": "Finca"
          }, {
            "tag": "option",
            "value": "canton",
            "html": "Cant\xF3n"
          }, {
            "tag": "option",
            "value": "paraje",
            "html": "Paraje"
          }, {
            "tag": "option",
            "value": "sector",
            "html": "Sector"
          }, {
            "tag": "option",
            "value": "barrio",
            "html": "Barrio"
          }, {
            "tag": "option",
            "value": "parcelamiento",
            "html": "Parcelamiento"
          }, {
            "tag": "option",
            "value": "microregion",
            "html": "Microregi\xF3n"
          }, {
            "tag": "option",
            "value": "otro",
            "html": "Otro"
          }]
        }, {
          "tag": "input",
          "type": "text",
          "name": "edanRapido.incidente.ubicacion.lugarPoblado.nombre",
          "value": "${edanRapido.incidente.ubicacion.lugarPoblado.nombre}",
          "placeholder": "Nombre",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Municipio"
        }, {
          "tag": "input",
          "type": "text",
          "name": "edanRapido.incidente.ubicacion.municipio",
          "value": "${edanRapido.incidente.ubicacion.municipio}",
          "placeholder": "Municipio",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Departamento"
        }, {
          "tag": "select",
          "name": "edanRapido.incidente.ubicacion.departamento",
          "value": "${edanRapido.incidente.ubicacion.departamento}",
          "children": [{
            "tag": "option",
            "value": "Alta Verapaz",
            "html": "Alta Verapaz"
          }, {
            "tag": "option",
            "value": "Baja Verapaz",
            "html": "Baja Verapaz"
          }, {
            "tag": "option",
            "value": "Chimaltenango",
            "html": "Chimaltenango"
          }, {
            "tag": "option",
            "value": "Chiquimula",
            "html": "Chiquimula"
          }, {
            "tag": "option",
            "value": "El Progreso",
            "html": "El Progreso"
          }, {
            "tag": "option",
            "value": "Escuintla",
            "html": "Escuintla"
          }, {
            "tag": "option",
            "value": "Guatemala",
            "html": "Guatemala"
          }, {
            "tag": "option",
            "value": "Huehuetenango",
            "html": "Huehuetenango"
          }, {
            "tag": "option",
            "value": "Izabal",
            "html": "Izabal"
          }, {
            "tag": "option",
            "value": "Jalapa",
            "html": "Jalapa"
          }, {
            "tag": "option",
            "value": "Jutiapa",
            "html": "Jutiapa"
          }, {
            "tag": "option",
            "value": "Pet\xE9n",
            "html": "Pet\xE9n"
          }, {
            "tag": "option",
            "value": "Quetzaltenango",
            "html": "Quetzaltenango"
          }, {
            "tag": "option",
            "value": "Quich\xE9",
            "html": "Quich\xE9"
          }, {
            "tag": "option",
            "value": "Retalhuleu",
            "html": "Retalhuleu"
          }, {
            "tag": "option",
            "value": "Sacatepequez",
            "html": "Sacatepequez"
          }, {
            "tag": "option",
            "value": "San Marcos",
            "html": "San Marcos"
          }, {
            "tag": "option",
            "value": "Santa Rosa",
            "html": "Santa Rosa"
          }, {
            "tag": "option",
            "value": "Solol\xE1",
            "html": "Solol\xE1"
          }, {
            "tag": "option",
            "value": "Suchitepequez",
            "html": "Suchitepequez"
          }, {
            "tag": "option",
            "value": "Totonicap\xE1n",
            "html": "Totonicap\xE1n"
          }, {
            "tag": "option",
            "value": "Zacapa",
            "html": "Zacapa"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "div",
          "class": "coordenadas",
          "children": [{
            "tag": "label",
            "html": "Coordenadas"
          }, {
            "tag": "label",
            "class": "level2",
            "html": "Latitud"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.ubicacion.coordenadas.latitud",
            "value": "${edanRapido.incidente.ubicacion.coordenadas.latitud}",
            "placeholder": "Latitud",
            "html": "",
            "class": "latitud"
          }, {
            "tag": "label",
            "class": "level2",
            "html": "Longitud"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.ubicacion.coordenadas.longitud",
            "value": "${edanRapido.incidente.ubicacion.coordenadas.longitud}",
            "placeholder": "Longitud",
            "html": "",
            "class": "longitud"
          }, {
            "tag": "div",
            "class": "btn",
            "html": "Obtener coordenadas"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Acceso"
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.acceso.aereo",
            "value": "${edanRapido.incidente.acceso.aereo}",
            "html": ""
          }, {
            "tag": "label",
            "html": "A\xE9reo"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.acceso.terrestre",
            "value": "${edanRapido.incidente.acceso.terrestre}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Terrestre"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.acceso.acuatico",
            "value": "${edanRapido.incidente.acceso.acuatico}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Acu\xE1tico"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.acceso.rutaAlterna",
            "value": "${edanRapido.incidente.acceso.rutaAlterna}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Ruta alterna"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Clima"
        }, {
          "tag": "div",
          "class": "radiogroup",
          "val": "${edanRapido.incidente.clima.nubdesp}",
          "children": [{
            "tag": "div",
            "class": "row tickr",
            "children": [{
              "tag": "input",
              "type": "radio",
              "name": "edanRapido.incidente.clima.nubdesp",
              "value": "Despejado",
              "html": ""
            }, {
              "tag": "label",
              "html": "Despejado"
            }]
          }, {
            "tag": "div",
            "class": "row tickr",
            "children": [{
              "tag": "input",
              "type": "radio",
              "name": "edanRapido.incidente.clima.nubdesp",
              "value": "Nublado",
              "html": ""
            }, {
              "tag": "label",
              "html": "Nublado"
            }]
          }]
        }, {
          "tag": "div",
          "class": "radiogroup",
          "val": "${edanRapido.incidente.clima.fuerzaViento}",
          "children": [{
            "tag": "div",
            "class": "row tickr",
            "children": [{
              "tag": "input",
              "type": "radio",
              "name": "edanRapido.incidente.clima.fuerzaViento",
              "value": "Viento fuerte",
              "html": ""
            }, {
              "tag": "label",
              "html": "Fuerte"
            }]
          }, {
            "tag": "div",
            "class": "row tickr",
            "children": [{
              "tag": "input",
              "type": "radio",
              "name": "edanRapido.incidente.clima.fuerzaViento",
              "value": "Viento moderado",
              "html": ""
            }, {
              "tag": "label",
              "html": "Moderado"
            }]
          }]
        }, {
          "tag": "div",
          "class": "checkgroup",
          "children": [{
            "tag": "div",
            "class": "row tickr",
            "children": [{
              "tag": "input",
              "type": "checkbox",
              "name": "edanRapido.incidente.clima.lluviaFuerte",
              "value": "${edanRapido.incidente.clima.lluviaFuerte}",
              "html": ""
            }, {
              "tag": "label",
              "html": "Lluvia fuerte"
            }]
          }, {
            "tag": "div",
            "class": "row tickr",
            "children": [{
              "tag": "input",
              "type": "checkbox",
              "name": "edanRapido.incidente.clima.actividadElectrica",
              "value": "${edanRapido.incidente.clima.actividadElectrica}",
              "html": ""
            }, {
              "tag": "label",
              "html": "Actividad el\xE9ctrica"
            }]
          }]
        }]
      }]
    }, {
      "tag": "div",
      "id": "registroDanios",
      "class": "section",
      "children": [{
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Personas"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "En riesgo"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.riesgo",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.riesgo}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Afectadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.afectadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.afectadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Damnificadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.damnificadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.damnificadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Atendidas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.atendidas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.atendidas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Evacuadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.evacuadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.evacuadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Albergadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.albergadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.albergadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Desaparecidas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.desaparecidas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.desaparecidas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Heridas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.heridas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.heridas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Fallecidas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.fallecidas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.fallecidas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Hospitalizadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.personas.hospitalizadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.personas.hospitalizadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Familias"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "En riesgo"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.familias.riesgo",
            "placeholder": "#",
            "value": "${edanRapido.incidente.familias.riesgo}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "familias"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Afectadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.familias.afectadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.familias.afectadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "familias"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Damnificadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.familias.damnificadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.familias.damnificadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "familias"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Atendidas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.familias.atendidas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.familias.atendidas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "familias"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Evacuadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.familias.evacuadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.familias.evacuadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "familias"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Albergadas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.familias.albergadas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.familias.albergadas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "familias"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Albergue 1"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Nombre"
          }, {
            "tag": "input",
            "type": "text",
            "name": "edanRapido.incidente.albergues.0.nombre",
            "placeholder": "Nombre del albergue",
            "value": "${edanRapido.incidente.albergues.0.nombre}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Encargado"
          }, {
            "tag": "input",
            "type": "text",
            "name": "edanRapido.incidente.albergues.0.encargado",
            "placeholder": "Encargado del albergue",
            "value": "${edanRapido.incidente.albergues.0.encargado}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Tel\xE9fono"
          }, {
            "tag": "input",
            "type": "number",
            "maxlength": "8",
            "name": "edanRapido.incidente.albergues.0.telefono",
            "placeholder": "Tel\xE9fono",
            "value": "${edanRapido.incidente.albergues.0.telefono}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Instituci\xF3n"
          }, {
            "tag": "input",
            "type": "text",
            "name": "edanRapido.incidente.albergues.0.institucion",
            "placeholder": "Instituci\xF3n",
            "value": "${edanRapido.incidente.albergues.0.institucion}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Capacidad"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.albergues.0.capacidad",
            "placeholder": "Capacidad",
            "value": "${edanRapido.incidente.albergues.0.capacidad}",
            "html": ""
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Albergue 2"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Nombre"
          }, {
            "tag": "input",
            "type": "text",
            "name": "edanRapido.incidente.albergues.1.nombre",
            "placeholder": "Nombre del albergue",
            "value": "${edanRapido.incidente.albergues.1.nombre}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Encargado"
          }, {
            "tag": "input",
            "type": "text",
            "name": "edanRapido.incidente.albergues.1.encargado",
            "placeholder": "Encargado del albergue",
            "value": "${edanRapido.incidente.albergues.1.encargado}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Tel\xE9fono"
          }, {
            "tag": "input",
            "type": "number",
            "maxlength": "8",
            "name": "edanRapido.incidente.albergues.1.telefono",
            "placeholder": "Tel\xE9fono",
            "value": "${edanRapido.incidente.albergues.1.telefono}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Instituci\xF3n"
          }, {
            "tag": "input",
            "type": "text",
            "name": "edanRapido.incidente.albergues.1.institucion",
            "placeholder": "Instituci\xF3n",
            "value": "${edanRapido.incidente.albergues.1.institucion}",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Capacidad"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.albergues.1.capacidad",
            "placeholder": "Capacidad",
            "value": "${edanRapido.incidente.albergues.1.capacidad}",
            "html": ""
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Viviendas"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "En riesgo"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.viviendas.riesgo",
            "placeholder": "#",
            "value": "${edanRapido.incidente.viviendas.riesgo}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "viviendas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Da\xF1o leve"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.viviendas.danioLeve",
            "placeholder": "#",
            "value": "${edanRapido.incidente.viviendas.danioLeve}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "viviendas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Da\xF1o moderado"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.viviendas.danioModerado",
            "placeholder": "#",
            "value": "${edanRapido.incidente.viviendas.danioModerado}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "viviendas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Da\xF1o severo"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.viviendas.danioSevero",
            "placeholder": "#",
            "value": "${edanRapido.incidente.viviendas.danioSevero}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "Viviendas"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Infraestructura"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Aeropuerto"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.aeropuerto.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.aeropuerto.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.aeropuerto.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.aeropuerto.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Carretera"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.carretera.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.carretera.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.carretera.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.carretera.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Puente"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.puente.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.puente.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.puente.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.puente.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Puerto"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.puerto.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.puerto.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.puerto.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.puerto.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Agua potable"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.aguaPotable.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.aguaPotable.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.aguaPotable.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.aguaPotable.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Alcantarillado"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.alcantarillado.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.alcantarillado.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.alcantarillado.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.alcantarillado.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Telecomunicaciones"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.telecomunicaciones.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.telecomunicaciones.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.telecomunicaciones.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.telecomunicaciones.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Luz el\xE9ctrica"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.luzElectrica.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.luzElectrica.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.luzElectrica.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.luzElectrica.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Escuelas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.escuelas.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.escuelas.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.escuelas.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.escuelas.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Iglesias"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.iglesias.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.iglesias.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.iglesias.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.iglesias.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Edificios"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.edificios.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.edificios.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.edificios.observaciones",
            "placeholder": "Observaciones",
            "value": "${edanRapido.incidente.infraestructura.edificios.observaciones}",
            "html": " "
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Otro"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.infraestructura.otro.cantidad",
            "placeholder": "#",
            "value": "${edanRapido.incidente.infraestructura.otro.cantidad}",
            "html": ""
          }, {
            "tag": "textarea",
            "name": "edanRapido.incidente.infraestructura.otro.observaciones",
            "placeholder": "Descripci\xF3n",
            "value": "${edanRapido.incidente.infraestructura.otro.observaciones}",
            "html": " "
          }]
        }]
      }, ]
    }, {
      "tag": "div",
      "id": "requerimientos",
      "class": "section",
      "children": [{
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Alimentos"
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Agua pura"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.alimentos.aguaPura",
            "placeholder": "#",
            "value": "${edanRapido.incidente.alimentos.aguaPura}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "galones"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Esponjas"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.alimentos.esponjas",
            "placeholder": "#",
            "value": "${edanRapido.incidente.alimentos.esponjas}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "esponjas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Frazadas tipo poncho"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.alimentos.frazadasTipoPoncho",
            "placeholder": "#",
            "value": "${edanRapido.incidente.alimentos.frazadasTipoPoncho}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "frazadas"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Raciones familiares"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.alimentos.racionFamiliar",
            "placeholder": "#",
            "value": "${edanRapido.incidente.alimentos.racionFamiliar}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "raciones"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Raciones frias"
          }, {
            "tag": "input",
            "type": "number",
            "name": "edanRapido.incidente.alimentos.racionFria",
            "placeholder": "#",
            "value": "${edanRapido.incidente.alimentos.racionFria}",
            "html": ""
          }, {
            "tag": "label",
            "class": "dimensional",
            "html": "personas"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Otros"
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.energiaElectrica",
            "value": "${edanRapido.incidente.otros.energiaElectrica}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Energ\xEDa el\xE9ctrica"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.redAguaPotable",
            "value": "${edanRapido.incidente.otros.redAguaPotable}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Red de agua potable"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.ambulancias",
            "value": "${edanRapido.incidente.otros.ambulancias}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Ambulancias"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.hospitalMovil",
            "value": "${edanRapido.incidente.otros.hospitalMovil}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Hospital m\xF3vil"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.equipoBREC",
            "value": "${edanRapido.incidente.otros.equipoBREC}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Equipo BREC"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.eriSeConred",
            "value": "${edanRapido.incidente.otros.eriSeConred}",
            "html": ""
          }, {
            "tag": "label",
            "html": "ERI SE-CONRED"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.seguridadPublica",
            "value": "${edanRapido.incidente.otros.seguridadPublica}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Seguridad P\xFAblica"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.otros.unidadContraIncendios",
            "value": "${edanRapido.incidente.otros.unidadContraIncendios}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Unidad contra incendios"
          }]
        }]
      }, {
        "tag": "div",
        "class": "container",
        "children": [{
          "tag": "h1",
          "html": "Evaluaci\xF3n"
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.evaluacion.estructural",
            "value": "${edanRapido.incidente.evaluacion.estructural}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Evaluaci\xF3n estructural"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.evaluacion.riesgo",
            "value": "${edanRapido.incidente.evaluacion.riesgo}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Evaluaci\xF3n de riesgo"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "checkbox",
            "name": "edanRapido.incidente.evaluacion.matpel",
            "value": "${edanRapido.incidente.evaluacion.matpel}",
            "html": ""
          }, {
            "tag": "label",
            "html": "Evaluaci\xF3n MATPEL"
          }]
        }]
      },{
        "tag": "h1",
        "html": "Acciones Realizadas"
      },
      jhEngine.fields.textareaField("", "edanRapido.incidente.accionesRealizadas.0"),
      jhEngine.fields.textareaField("", "edanRapido.incidente.accionesRealizadas.1"),
      jhEngine.fields.textareaField("", "edanRapido.incidente.accionesRealizadas.2"),
      jhEngine.fields.textareaField("", "edanRapido.incidente.accionesRealizadas.3"),
      jhEngine.fields.textareaField("", "edanRapido.incidente.accionesRealizadas.4"),
      jhEngine.fields.textareaField("", "edanRapido.incidente.accionesRealizadas.5"),
      {
        "tag": "h1",
        "html": "Instituciones Presentes"
      },
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.0", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.1", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.2", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.3", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.4", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.5", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.6", "instituciones"),
      jhEngine.fields.filterField("", "edanRapido.incidente.institucionesPresentes.7", "instituciones")
      ]
    }]
  }],
  blank: {
    "edanRapido": {}
  },
  init: function() {
    util.baseInit();
  }
}

jhEngine.templates.epSituacion = {
  fullname: "Eval. Prel. de Situaci\xF3n",
  transformation: [{
    "tag": "div",
    "id": "sectionChooser",
    "children": [{
      "tag": "select",
      "children": [{
        "tag": "option",
        "value": "",
        "html": "Seleccione una p\xE1gina para ingresar datos"
      }, {
        "tag": "option",
        "value": "infoGeneral",
        "html": "Informaci\xF3n general"
      }, {
        "tag": "option",
        "value": "antecedentes",
        "html": "Antecedentes"
      }, {
        "tag": "option",
        "value": "caracteristicasSitio",
        "html": "Caracter\xEDsticas del sitio"
      }, {
        "tag": "option",
        "value": "descripcionGeneral",
        "html": "Descripci\xF3n general del evento"
      }, {
        "tag": "option",
        "value": "descripcionEspecifica",
        "html": "Descripci\xF3n espec\xEDfica"
        }, {
          "tag": "option",
          "value": "recomendaciones",
          "html": "Recomendaciones"
      }, {
        "tag": "option",
        "value": "croquis",
        "html": "Croquis descriptor del evento"
      }, {
        "tag": "option",
        "value": "registroFotografico",
        "html": "Registro fotogr\xE1fico"
      }]
    }]
  }, {
    "tag": "form",
    "children": [{
      "tag": "div",
      "id": "infoGeneral",
      "class": "section",
      "children": [{
        "tag": "div",
        "class": "datefield",
        "children": [{
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Fecha de evaluaci\xF3n"
          }, {
            "tag": "input",
            "type": "number",
            "name": "epSituacion.evaluacion.fecha.dia",
            "value": "${epSituacion.evaluacion.fecha.dia}",
            "placeholder": "D\xEDa",
            "maxlength": "2",
            "class": "day",
            "html": ""
          }, {
            "tag": "span",
            "html": "/"
          }, {
            "tag": "select",
            "class": "month",
            "name": "epSituacion.evaluacion.fecha.mes",
            "value": "${epSituacion.evaluacion.fecha.mes}",
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
            "class": "year",
            "name": "epSituacion.evaluacion.fecha.anio",
            "value": "${epSituacion.evaluacion.fecha.anio}",
            "placeholder": "A\xF1o",
            "maxlength": "4",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "div",
            "class": "btn",
            "html": "Obtener fecha actual"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "C\xF3digo"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.codigo",
          "value": "${epSituacion.evaluacion.codigo}",
          "placeholder": "C\xF3digo",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Ubicaci\xF3n"
        }, {
          "tag": "select",
          "name": "epSituacion.incidente.ubicacion.lugarPoblado.categoria",
          "value": "${epSituacion.incidente.ubicacion.lugarPoblado.categoria}",
          "children": [{
            "tag": "option",
            "value": "",
            "html": "Categor\xEDa"
          }, {
            "tag": "option",
            "value": "aldea",
            "html": "Aldea"
          }, {
            "tag": "option",
            "value": "caserio",
            "html": "Caser\xEDo"
          }, {
            "tag": "option",
            "value": "finca",
            "html": "Finca"
          }, {
            "tag": "option",
            "value": "canton",
            "html": "Cant\xF3n"
          }, {
            "tag": "option",
            "value": "paraje",
            "html": "Paraje"
          }, {
            "tag": "option",
            "value": "sector",
            "html": "Sector"
          }, {
            "tag": "option",
            "value": "barrio",
            "html": "Barrio"
          }, {
            "tag": "option",
            "value": "parcelamiento",
            "html": "Parcelamiento"
          }, {
            "tag": "option",
            "value": "microregion",
            "html": "Microregi\xF3n"
          }, {
            "tag": "option",
            "value": "otro",
            "html": "Otro"
          }]
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.incidente.ubicacion.lugarPoblado.nombre",
          "value": "${epSituacion.incidente.ubicacion.lugarPoblado.nombre}",
          "placeholder": "Nombre",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Municipio"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.incidente.ubicacion.municipio",
          "value": "${epSituacion.incidente.ubicacion.municipio}",
          "placeholder": "Municipio",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Departamento"
        }, {
          "tag": "select",
          "name": "epSituacion.incidente.ubicacion.departamento",
          "value": "${epSituacion.incidente.ubicacion.departamento}",
          "children": [{
            "tag": "option",
            "value": "Alta Verapaz",
            "html": "Alta Verapaz"
          }, {
            "tag": "option",
            "value": "Baja Verapaz",
            "html": "Baja Verapaz"
          }, {
            "tag": "option",
            "value": "Chimaltenango",
            "html": "Chimaltenango"
          }, {
            "tag": "option",
            "value": "Chiquimula",
            "html": "Chiquimula"
          }, {
            "tag": "option",
            "value": "El Progreso",
            "html": "El Progreso"
          }, {
            "tag": "option",
            "value": "Escuintla",
            "html": "Escuintla"
          }, {
            "tag": "option",
            "value": "Guatemala",
            "html": "Guatemala"
          }, {
            "tag": "option",
            "value": "Huehuetenango",
            "html": "Huehuetenango"
          }, {
            "tag": "option",
            "value": "Izabal",
            "html": "Izabal"
          }, {
            "tag": "option",
            "value": "Jalapa",
            "html": "Jalapa"
          }, {
            "tag": "option",
            "value": "Jutiapa",
            "html": "Jutiapa"
          }, {
            "tag": "option",
            "value": "Pet\xE9n",
            "html": "Pet\xE9n"
          }, {
            "tag": "option",
            "value": "Quetzaltenango",
            "html": "Quetzaltenango"
          }, {
            "tag": "option",
            "value": "Quich\xE9",
            "html": "Quich\xE9"
          }, {
            "tag": "option",
            "value": "Retalhuleu",
            "html": "Retalhuleu"
          }, {
            "tag": "option",
            "value": "Sacatepequez",
            "html": "Sacatepequez"
          }, {
            "tag": "option",
            "value": "San Marcos",
            "html": "San Marcos"
          }, {
            "tag": "option",
            "value": "Santa Rosa",
            "html": "Santa Rosa"
          }, {
            "tag": "option",
            "value": "Solol\xE1",
            "html": "Solol\xE1"
          }, {
            "tag": "option",
            "value": "Suchitepequez",
            "html": "Suchitepequez"
          }, {
            "tag": "option",
            "value": "Totonicap\xE1n",
            "html": "Totonicap\xE1n"
          }, {
            "tag": "option",
            "value": "Zacapa",
            "html": "Zacapa"
          }]
        }, ]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "div",
          "class": "coordenadas",
          "children": [{
            "tag": "label",
            "html": "Coordenadas"
          }, {
            "tag": "label",
            "class": "level2",
            "html": "Latitud"
          }, {
            "tag": "input",
            "type": "number",
            "class": "latitud",
            "name": "epSituacion.incidente.ubicacion.coordenadas.latitud",
            "value": "${epSituacion.incidente.ubicacion.coordenadas.latitud}",
            "placeholder": "Latitud",
            "html": ""
          }, {
            "tag": "label",
            "class": "level2",
            "html": "Longitud"
          }, {
            "tag": "input",
            "type": "number",
            "class": "longitud",
            "name": "epSituacion.incidente.ubicacion.coordenadas.longitud",
            "value": "${epSituacion.incidente.ubicacion.coordenadas.longitud}",
            "placeholder": "Longitud",
            "html": ""
          }, {
            "tag": "div",
            "class": "btn",
            "html": "Obtener coordenadas"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Lugar donde se tom\xF3 la coordenada"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.incidente.ubicacion.lugar",
          "value": "${epSituacion.incidente.ubicacion.lugar}",
          "placeholder": "Lugar",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "\xBFC\xF3mo llegar a la comunidad?"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.incidente.ubicacion.direcciones.comoLlegar",
          "value": "${epSituacion.incidente.ubicacion.direcciones.comoLlegar}",
          "placeholder": "Indicaciones",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Asfalto"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.ubicacion.direcciones.asfalto",
          "value": "${epSituacion.incidente.ubicacion.direcciones.asfalto}",
          "placeholder": "Kms.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Kms."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Terracer\xEDa"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.ubicacion.direcciones.terraceria",
          "value": "${epSituacion.incidente.ubicacion.direcciones.terraceria}",
          "placeholder": "Kms.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Kms."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Vereda"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.ubicacion.direcciones.vereda",
          "value": "${epSituacion.incidente.ubicacion.direcciones.vereda}",
          "placeholder": "Kms.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Kms."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "A\xE9reo"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.ubicacion.direcciones.aereo",
          "value": "${epSituacion.incidente.ubicacion.direcciones.aereo}",
          "placeholder": "Kms.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Kms."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Acu\xE1tico"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.ubicacion.direcciones.acuatico",
          "value": "${epSituacion.incidente.ubicacion.direcciones.acuatico}",
          "placeholder": "Kms.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Kms."
        }]
      }, {
        "tag": "h1",
        "html": "Acceso"
      }, {
        "tag": "div",
        "class": "radiogroup",
        "val": "${epSituacion.incidente.ubicacion.acceso}",
        "children": [{
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.incidente.ubicacion.acceso",
            "value": "F\xE1cil",
            "html": ""
          }, {
            "tag": "label",
            "html": "F\xE1cil"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.incidente.ubicacion.acceso",
            "value": "Dif\xEDcil",
            "html": ""
          }, {
            "tag": "label",
            "html": "Dif\xEDcil"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Evaluaci\xF3n solicitada por"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.solicitadaPor.nombre",
          "value": "${epSituacion.evaluacion.solicitadaPor.nombre}",
          "placeholder": "Nombre",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Instituci\xF3n"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.solicitadaPor.institucion",
          "value": "${epSituacion.evaluacion.solicitadaPor.institucion}",
          "placeholder": "Instituci\xF3n",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Tel\xE9fono"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.evaluacion.solicitadaPor.telefono",
          "value": "${epSituacion.evaluacion.solicitadaPor.telefono}",
          "placeholder": "Tel\xE9fono",
          "maxlength": "8",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Cantidad de infraestructura en riesgo"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.infraestructura.enRiesgo",
          "value": "${epSituacion.incidente.infraestructura.enRiesgo}",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Cantidad de viviendas en la comunidad"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.incidente.infraestructura.totalComunidad",
          "value": "${epSituacion.incidente.infraestructura.totalComunidad}",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Nombre de la persona que acompa\xF1a en la comunidad"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.acompanantes.0.nombre",
          "value": "${epSituacion.evaluacion.acompanantes.0.nombre}",
          "placeholder": "Nombre",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Cargo"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.acompanantes.0.cargo",
          "value": "${epSituacion.evaluacion.acompanantes.0.cargo}",
          "placeholder": "Cargo",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Tel\xE9fono"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.evaluacion.acompanantes.0.telefono",
          "value": "${epSituacion.evaluacion.acompanantes.0.telefono}",
          "placeholder": "Tel\xE9fono",
          "maxlength": "8",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Nombre de la persona que acompa\xF1a en la comunidad"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.acompanantes.1.nombre",
          "value": "${epSituacion.evaluacion.acompanantes.1.nombre}",
          "placeholder": "Nombre",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Cargo"
        }, {
          "tag": "input",
          "type": "text",
          "name": "epSituacion.evaluacion.acompanantes.1.cargo",
          "value": "${epSituacion.evaluacion.acompanantes.1.cargo}",
          "placeholder": "Cargo",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Tel\xE9fono"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.evaluacion.acompanantes.1.telefono",
          "value": "${epSituacion.evaluacion.acompanantes.1.telefono}",
          "placeholder": "Tel\xE9fono",
          "maxlength": "8",
          "html": ""
        }]
      }]
    }, {
      "tag": "div",
      "id": "antecedentes",
      "class": "section",
      "children": [{
        "tag": "div",
        "class": "datefield",
        "children": [{
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "1. Fecha"
          }, {
            "tag": "input",
            "type": "number",
            "name": "epSituacion.antecedentes.0.fecha.dia",
            "value": "${epSituacion.antecedentes.0.fecha.dia}",
            "placeholder": "D\xEDa",
            "maxlength": "2",
            "class": "day",
            "html": ""
          }, {
            "tag": "span",
            "html": "/"
          }, {
            "tag": "select",
            "class": "month",
            "name": "epSituacion.antecedentes.0.fecha.mes",
            "value": "${epSituacion.antecedentes.0.fecha.mes}",
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
            "class": "year",
            "name": "epSituacion.antecedentes.0.fecha.anio",
            "value": "${epSituacion.antecedentes.0.fecha.anio}",
            "placeholder": "A\xF1o",
            "maxlength": "4",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "div",
            "class": "btn",
            "html": "Obtener fecha actual"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Evento"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.antecedentes.0.evento",
          "value": "${epSituacion.antecedentes.0.evento}",
          "placeholder": "Evento",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Acciones"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.antecedentes.0.acciones",
          "value": "${epSituacion.antecedentes.0.acciones}",
          "placeholder": "Acciones",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "datefield",
        "children": [{
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "2. Fecha"
          }, {
            "tag": "input",
            "type": "number",
            "name": "epSituacion.antecedentes.1.fecha.dia",
            "value": "${epSituacion.antecedentes.1.fecha.dia}",
            "placeholder": "D\xEDa",
            "maxlength": "2",
            "class": "day",
            "html": ""
          }, {
            "tag": "span",
            "html": "/"
          }, {
            "tag": "select",
            "class": "month",
            "name": "epSituacion.antecedentes.1.fecha.mes",
            "value": "${epSituacion.antecedentes.0.fecha.mes}",
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
            "class": "year",
            "name": "epSituacion.antecedentes.1.fecha.anio",
            "value": "${epSituacion.antecedentes.1.fecha.anio}",
            "placeholder": "A\xF1o",
            "maxlength": "4",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "div",
            "class": "btn",
            "html": "Obtener fecha actual"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Evento"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.antecedentes.1.evento",
          "value": "${epSituacion.antecedentes.1.evento}",
          "placeholder": "Evento",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Acciones"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.antecedentes.1.acciones",
          "value": "${epSituacion.antecedentes.1.acciones}",
          "placeholder": "Acciones",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "datefield",
        "children": [{
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "3. Fecha"
          }, {
            "tag": "input",
            "type": "number",
            "name": "epSituacion.antecedentes.2.fecha.dia",
            "value": "${epSituacion.antecedentes.2.fecha.dia}",
            "placeholder": "D\xEDa",
            "maxlength": "2",
            "class": "day",
            "html": ""
          }, {
            "tag": "span",
            "html": "/"
          }, {
            "tag": "select",
            "class": "month",
            "name": "epSituacion.antecedentes.0.fecha.mes",
            "value": "${epSituacion.antecedentes.0.fecha.mes}",
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
            "class": "year",
            "name": "epSituacion.antecedentes.2.fecha.anio",
            "value": "${epSituacion.antecedentes.2.fecha.anio}",
            "placeholder": "A\xF1o",
            "maxlength": "4",
            "html": ""
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "div",
            "class": "btn",
            "html": "Obtener fecha actual"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Evento"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.antecedentes.2.evento",
          "value": "${epSituacion.antecedentes.2.evento}",
          "placeholder": "Evento",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Acciones"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.antecedentes.2.acciones",
          "value": "${epSituacion.antecedentes.2.acciones}",
          "placeholder": "Acciones",
          "html": ""
        }]
      }]
    }, {
      "tag": "div",
      "id": "caracteristicasSitio",
      "class": "section",
      "children": [{
        "tag": "h1",
        "html": "Tipo de amenaza"
      }, {
        "tag": "div",
        "class": "radiogroup",
        "val": "${epSituacion.sitio.amenaza.tipo}",
        "children": [{
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.amenaza.tipo",
            "value": "Hidrometeorol\xF3gico",
            "html": ""
          }, {
            "tag": "label",
            "html": "Hidrometeorol\xF3gico"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.amenaza.tipo",
            "value": "Geol\xF3gico",
            "html": ""
          }, {
            "tag": "label",
            "html": "Geol\xF3gico"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.amenaza.tipo",
            "value": "Volc\xE1nico",
            "html": ""
          }, {
            "tag": "label",
            "html": "Volc\xE1nico"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.amenaza.tipo",
            "value": "Antropog\xE9nico o socioparticipativo",
            "html": ""
          }, {
            "tag": "label",
            "html": "Antropog\xE9nico o socioparticipativo"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.amenaza.tipo",
            "value": "Mixto",
            "html": ""
          }, {
            "tag": "label",
            "html": "Mixto"
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Especifique:"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.sitio.amenaza.comentario",
          "value": "${epSituacion.sitio.amenaza.comentario}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Pendiente del terreno"
      }, {
        "tag": "div",
        "class": "radiogroup",
        "val": "${epSituacion.sitio.pendienteTerreno}",
        "children": [{
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.pendienteTerreno",
            "value": "0-2",
            "html": ""
          }, {
            "tag": "label",
            "html": "0.00 - 2 Grados"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.pendienteTerreno",
            "value": "2.01-15",
            "html": ""
          }, {
            "tag": "label",
            "html": "2.01 - 15 Grados"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.pendienteTerreno",
            "value": "15.01-30",
            "html": ""
          }, {
            "tag": "label",
            "html": "15.01- 30 Grados"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.pendienteTerreno",
            "value": "30.01-45",
            "html": ""
          }, {
            "tag": "label",
            "html": "30.01 - 45 Grados"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.pendienteTerreno",
            "value": "45+",
            "html": ""
          }, {
            "tag": "label",
            "html": "Mayor a 45 grados"
          }]
        }]
      }, {
        "tag": "h1",
        "html": "Tipo de suelo"
      }, {
        "tag": "div",
        "class": "radiogroup",
        "val": "${epSituacion.sitio.suelo.tipo}",
        "children": [{
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.suelo.tipo",
            "value": "Arcilloso",
            "html": ""
          }, {
            "tag": "label",
            "html": "Arcilloso"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.suelo.tipo",
            "value": "Arenoso",
            "html": ""
          }, {
            "tag": "label",
            "html": "Arenoso"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.suelo.tipo",
            "value": "Rocoso",
            "html": ""
          }, {
            "tag": "label",
            "html": "Rocoso"
          }]
        }, {
          "tag": "div",
          "class": "row tickr",
          "children": [{
            "tag": "input",
            "type": "radio",
            "name": "epSituacion.sitio.suelo.tipo",
            "value": "Mixto",
            "class": "enable-other",
            "html": ""
          }, {
            "tag": "label",
            "html": "Mixto"
          }]
        }, {
          "tag": "div",
          "class": "row",
          "children": [{
            "tag": "label",
            "html": "Especifique:"
          }, {
            "tag": "textarea",
            "type": "text",
            "name": "epSituacion.sitio.suelo.comentario",
            "value": "${epSituacion.sitio.suelo.comentario}",
            "placeholder": "Especifique",
            "class": "other",
            "html": ""
          }]
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Uso del suelo:"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.sitio.suelo.uso",
          "value": "${epSituacion.sitio.suelo.uso}",
          "placeholder": "Uso del suelo",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Infraestructura existente"
      }, {
        "tag": "div",
        "class": "row tickr",
        "children": [{
          "tag": "input",
          "type": "checkbox",
          "name": "edanRapido.sitio.infraestructura.iglesias",
          "value": "${edanRapido.sitio.infraestructura.iglesias}",
          "html": ""
        }, {
          "tag": "label",
          "html": "Iglesias"
        }]
      }, {
        "tag": "div",
        "class": "row tickr",
        "children": [{
          "tag": "input",
          "type": "checkbox",
          "name": "edanRapido.sitio.infraestructura.escuela",
          "value": "${edanRapido.sitio.infraestructura.escuela}",
          "html": ""
        }, {
          "tag": "label",
          "html": "Escuela"
        }]
      }, {
        "tag": "div",
        "class": "row tickr",
        "children": [{
          "tag": "input",
          "type": "checkbox",
          "name": "edanRapido.sitio.infraestructura.energiaElectrica",
          "value": "${edanRapido.sitio.infraestructura.energiaElectrica}",
          "html": ""
        }, {
          "tag": "label",
          "html": "Energ\xEDa El\xE9ctrica"
        }]
      }, {
        "tag": "div",
        "class": "row tickr",
        "children": [{
          "tag": "input",
          "type": "checkbox",
          "name": "edanRapido.sitio.infraestructura.carreteras",
          "value": "${edanRapido.sitio.infraestructura.carreteras}",
          "html": ""
        }, {
          "tag": "label",
          "html": "Carreteras"
        }]
      }, {
        "tag": "div",
        "class": "row tickr",
        "children": [{
          "tag": "input",
          "type": "checkbox",
          "name": "edanRapido.sitio.infraestructura.aguaPotable",
          "value": "${edanRapido.sitio.infraestructura.aguaPotable}",
          "html": ""
        }, {
          "tag": "label",
          "html": "Agua Potable"
        }]
      }, {
        "tag": "div",
        "class": "row tickr",
        "children": [{
          "tag": "input",
          "type": "checkbox",
          "name": "edanRapido.sitio.infraestructura.drenajeSanitario",
          "value": "${edanRapido.sitio.infraestructura.drenajeSanitario}",
          "html": ""
        }, {
          "tag": "label",
          "html": "Drenaje Sanitario"
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Servicios de salud (especifique):"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.sitio.infraestructura.serviciosSalud",
          "value": "${epSituacion.sitio.infraestructura.serviciosSalud}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Otros (especifique):"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.sitio.otros",
          "value": "${epSituacion.sitio.otros}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Distancia a:"
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "R\xEDo"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.sitio.distancia.rio",
          "value": "${epSituacion.sitio.distancia.rio}",
          "placeholder": "Mts.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Mts."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Quebrada"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.sitio.distancia.quebrada",
          "value": "${epSituacion.sitio.distancia.quebrada}",
          "placeholder": "Mts.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Mts."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Nacimiento"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.sitio.distancia.nacimiento",
          "value": "${epSituacion.sitio.distancia.nacimiento}",
          "placeholder": "Mts.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Mts."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Barranco"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.sitio.distancia.barranco",
          "value": "${epSituacion.sitio.distancia.barranco}",
          "placeholder": "Mts.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Mts."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "A pie de ladera"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.sitio.distancia.pieLadera",
          "value": "${epSituacion.sitio.distancia.pieLadera}",
          "placeholder": "Mts.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Mts."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "A corona de ladera"
        }, {
          "tag": "input",
          "type": "number",
          "name": "epSituacion.sitio.distancia.coronaLadera",
          "value": "${epSituacion.sitio.distancia.coronaLadera}",
          "placeholder": "Mts.",
          "html": ""
        }, {
          "tag": "label",
          "class": "dimensional",
          "html": "Mts."
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "Otros (especifique)"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.sitio.distancia.otros",
          "value": "${epSituacion.sitio.distancia.otros}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }]
    }, {
      "tag": "div",
      "id": "descripcionGeneral",
      "class": "section",
      "children": [{
        "tag": "h1",
        "html": "Descripci\xF3n General"
      }, {
        "tag": "textarea",
        "type": "text",
        "class": "giant",
        "name": "epSituacion.descripcionGeneral",
        "value": "${epSituacion.descripcionGeneral}",
        "placeholder": "Descripci\xF3n General",
        "html": ""
      }]
    }, {
      "tag": "div",
      "id": "descripcionEspecifica",
      "class": "section",
      "children": [{
        "tag": "h1",
        "html": "Descripci\xF3n Espec\xEDfica"
      }, {
        "tag": "textarea",
        "type": "text",
        "class": "giant",
        "name": "epSituacion.descripcionEspecifica",
        "value": "${epSituacion.descripcionEspecifica}",
        "placeholder": "Descripci\xF3n Espec\xEDfica",
        "html": ""
      }]
    }, {
      "tag": "div",
      "id": "recomendaciones",
      "class": "section",
      "children": [{
        "tag": "h1",
        "html": "Recomendaciones"
      },
      jhEngine.fields.textareaField("","epSituacion.recomendaciones.0"),
      jhEngine.fields.textareaField("","epSituacion.recomendaciones.1"),
      jhEngine.fields.textareaField("","epSituacion.recomendaciones.2"),
      jhEngine.fields.textareaField("","epSituacion.recomendaciones.3"),
      ]
    }, {
      "tag": "div",
      "id": "croquis",
      "class": "section",
      "children": [{
        "tag": "h1",
        "html": "Croquis descriptor del evento"
      }, {
        "tag": "div",
        "class": "camera",
        "children": [{
          "tag": "img",
          "name": "epSituacion.croquis",
          "src": "${epSituacion.croquis}",
          "html": ""
        }, {
          "tag": "div",
          "class": "btn",
          "html": "Tomar fotograf\xEDa"
        }]
      }]
    }, {
      "tag": "div",
      "id": "registroFotografico",
      "class": "section",
      "children": [{
        "tag": "h1",
        "html": "Foto panor\xE1mica"
      }, {
        "tag": "div",
        "class": "camera",
        "children": [{
          "tag": "img",
          "name": "epSituacion.registroFotografico.panoramica.img",
          "src": "${epSituacion.registroFotografico.panoramica.img}",
          "html": ""
        }, {
          "tag": "div",
          "class": "btn",
          "html": "Tomar fotograf\xEDa"
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "\xBFQu\xE9 describe?"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.registroFotografico.panoramica.descripcion",
          "value": "${epSituacion.registroFotografico.panoramica.descripcion}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Foto general"
      }, {
        "tag": "div",
        "class": "camera",
        "children": [{
          "tag": "img",
          "name": "epSituacion.registroFotografico.general.img",
          "src": "${epSituacion.registroFotografico.general.img}",
          "html": ""
        }, {
          "tag": "div",
          "class": "btn",
          "html": "Tomar fotograf\xEDa"
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "\xBFQu\xE9 describe?"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.registroFotografico.general.descripcion",
          "value": "${epSituacion.registroFotografico.general.descripcion}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Foto de detalles 1"
      }, {
        "tag": "div",
        "class": "camera",
        "children": [{
          "tag": "img",
          "name": "epSituacion.registroFotografico.detalles.0.img",
          "src": "${epSituacion.registroFotografico.detalles.0.img}",
          "html": ""
        }, {
          "tag": "div",
          "class": "btn",
          "html": "Tomar fotograf\xEDa"
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "\xBFQu\xE9 describe?"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.registroFotografico.detalles.0.descripcion",
          "value": "${epSituacion.registroFotografico.detalles.0.descripcion}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Foto de detalles 2"
      }, {
        "tag": "div",
        "class": "camera",
        "children": [{
          "tag": "img",
          "name": "epSituacion.registroFotografico.detalles.1.img",
          "src": "${epSituacion.registroFotografico.detalles.1.img}",
          "html": ""
        }, {
          "tag": "div",
          "class": "btn",
          "html": "Tomar fotograf\xEDa"
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "\xBFQu\xE9 describe?"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.registroFotografico.detalles.1.descripcion",
          "value": "${epSituacion.registroFotografico.detalles.1.descripcion}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }, {
        "tag": "h1",
        "html": "Foto de detalles 3"
      }, {
        "tag": "div",
        "class": "camera",
        "children": [{
          "tag": "img",
          "name": "epSituacion.registroFotografico.detalles.2.img",
          "src": "${epSituacion.registroFotografico.detalles.2.img}",
          "html": ""
        }, {
          "tag": "div",
          "class": "btn",
          "html": "Tomar fotograf\xEDa"
        }]
      }, {
        "tag": "div",
        "class": "row",
        "children": [{
          "tag": "label",
          "html": "\xBFQu\xE9 describe?"
        }, {
          "tag": "textarea",
          "type": "text",
          "name": "epSituacion.registroFotografico.detalles.2.descripcion",
          "value": "${epSituacion.registroFotografico.detalles.2.descripcion}",
          "placeholder": "Especifique",
          "html": ""
        }]
      }]
    }]
  }],
  blank: {
    "epSituacion": {}
  },
  init: function() {
    util.baseInit();
  }
}

jhEngine.templates.epHabitabilidad = {
  fullname: "Ev. Pr. de Habitabilidad",
  transformation: [
    jhEngine.fields.sectionChooser([
      {name: "Informaci\xF3n General", value: "infoGeneral"},
      {name: "Antecedentes", value: "antecedentes"},
      {name: "Caracter\xEDsticas del Sitio", value: "caracteristicasSitio"},
      {name: "Criterios para estimar la habitabilidad", value: "criteriosEstimacion"},
      {name: "Condicionantes de no habitabilidad", value: "condicionantes"},
      {name: "Estimaci\xF3n preliminar de habitabilidad", value: "estimacion"},
      {name: "Croquis del terreno", value: "croquis"},
      {name: "Registro Fotogr\xE1fico", value: "registroFotografico"}
    ]),
    jhEngine.fields.form([
      jhEngine.fields.section("infoGeneral", [
        jhEngine.fields.dateField("Fecha de evaluaci\xF3n", "epHabitabilidad.infoGeneral.fechaEvaluacion"),
        jhEngine.fields.textField("C\xF3digo", "epHabitabilidad.infoGeneral.codigo"),
        {"tag":"h1","html":"Ubicaci\xF3n"},
        jhEngine.fields.selectField("Categor\xEDa de lugar poblado", "epHabitabilidad.infoGeneral.ubicacion.lugarPoblado.categoria", CONRED.categorias),
        jhEngine.fields.textField("Nombre de lugar poblado", "epHabitabilidad.infoGeneral.ubicacion.lugarPoblado.nombre"),
        jhEngine.fields.textField("Municipio", "epHabitabilidad.infoGeneral.ubicacion.municipio"),
        jhEngine.fields.selectField("Departamento", "epHabitabilidad.infoGeneral.ubicacion.departamento", CONRED.departamentos),
        jhEngine.fields.locationField("Coordenadas", "epHabitabilidad.infoGeneral.ubicacion.coordenadas"),
        jhEngine.fields.textField("Lugar donde se tom\xF3 la coordenada", "epHabitabilidad.infoGeneral.ubicacion.lugar"),
        jhEngine.fields.textareaField("\xBFC\xF3mo llegar a la comunidad?", "epHabitabilidad.infoGeneral.ubicacion.direcciones.comoLlegar"),
        jhEngine.fields.dimensionalField("Asfalto", "epHabitabilidad.infoGeneral.ubicacion.direcciones.asfalto", "Kms."),
        jhEngine.fields.dimensionalField("Terracer\xEDa", "epHabitabilidad.infoGeneral.ubicacion.direcciones.terraceria", "Kms."),
        jhEngine.fields.dimensionalField("Vereda", "epHabitabilidad.infoGeneral.ubicacion.direcciones.vereda", "Kms."),
        jhEngine.fields.dimensionalField("A\xE9reo", "epHabitabilidad.infoGeneral.ubicacion.direcciones.aereo", "Kms."),
        jhEngine.fields.dimensionalField("Acu\xE1tico", "epHabitabilidad.infoGeneral.ubicacion.direcciones.acuatico", "Kms."),
        jhEngine.fields.radioFields("Acceso", "epHabitabilidad.infoGeneral.ubicacion.acceso", [{name: "F\xE1cil", value: "facil"}, {name: "Dif\xEDcil", value: "dificil"}]),
        jhEngine.fields.textField("Evaluaci\xF3n solicitada por", "epHabitabilidad.infoGeneral.solicitadaPor.nombre"),
        jhEngine.fields.textField("Instituci\xF3n", "epHabitabilidad.infoGeneral.solicitadaPor.institucion"),
        jhEngine.fields.numberField("Tel\xE9fono", "epHabitabilidad.infoGeneral.solicitadaPor.telefono", 8),
        jhEngine.fields.dimensionalField("Cantidad de viviendas a ubicar en el terreno", "epHabitabilidad.infoGeneral.viviendasAUbicar", "viviendas"),
        jhEngine.fields.textareaField("Instituciones presentes en la comunidad", "epHabitabilidad.infoGeneral.institucionesPresentes"),
        jhEngine.fields.textField("Nombre de la persona que acompa\xF1a en la comunidad", "epHabitabilidad.infoGeneral.acompanantes.0.nombre"),
        jhEngine.fields.textField("Cargo", "epHabitabilidad.infoGeneral.acompanantes.0.cargo"),
        jhEngine.fields.numberField("Tel\xE9fono", "epHabitabilidad.infoGeneral.acompanantes.0.telefono", 8),
        jhEngine.fields.textField("Nombre de la persona que acompa\xF1a en la comunidad", "epHabitabilidad.infoGeneral.acompanantes.1.nombre"),
        jhEngine.fields.textField("Cargo", "epHabitabilidad.infoGeneral.acompanantes.1.cargo"),
        jhEngine.fields.numberField("Tel\xE9fono", "epHabitabilidad.infoGeneral.acompanantes.1.telefono", 8),
      ]),
      jhEngine.fields.section("antecedentes", [
        jhEngine.fields.dateField("1. Fecha", "epHabitabilidad.antecedentes.0.fecha", false),
        jhEngine.fields.textareaField("Evento", "epHabitabilidad.antecedentes.0.evento"),
        jhEngine.fields.textareaField("Acciones", "epHabitabilidad.antecedentes.0.acciones"),
        jhEngine.fields.dateField("2. Fecha", "epHabitabilidad.antecedentes.1.fecha", false),
        jhEngine.fields.textareaField("Evento", "epHabitabilidad.antecedentes.1.evento"),
        jhEngine.fields.textareaField("Acciones", "epHabitabilidad.antecedentes.1.acciones"),
        jhEngine.fields.dateField("3. Fecha", "epHabitabilidad.antecedentes.2.fecha", false),
        jhEngine.fields.textareaField("Evento", "epHabitabilidad.antecedentes.2.evento"),
        jhEngine.fields.textareaField("Acciones", "epHabitabilidad.antecedentes.2.acciones"),
      ]),
      jhEngine.fields.section("caracteristicasSitio", [
        jhEngine.fields.dimensionalField("\xC1rea del terreno", "epHabitabilidad.caracteristicas.areaTerreno", "m\xB2"),
        jhEngine.fields.dimensionalField("\xC1rea a utilizar", "epHabitabilidad.caracteristicas.areaAUtilizar", "m\xB2"),
        jhEngine.fields.dimensionalField("\xC1rea para servicios", "epHabitabilidad.caracteristicas.areaServicios", "m\xB2"),
        jhEngine.fields.radioFields("Pendiente del terreno", "epHabitabilidad.caracteristicas.pendienteTerreno", [
          {name: "0.00 - 2 Grados", value: "0-2"},
          {name: "2.01 - 15 Grados", value: "2.01-15"},
          {name: "15.01 - 30 Grados", value: "15.01-30"},
          {name: "30.01 - 45 Grados", value: "30.01-45"},
          {name: "Mayor a 45 Grados", value: "45+"},
        ]),
        jhEngine.fields.radioFields("Tipo de suelo", "epHabitabilidad.caracteristicas.suelo.tipo", [
          {name: "Arcilloso", value: "arcilloso"},
          {name: "Arenoso", value: "arenoso"},
          {name: "Rocoso", value: "rocoso"},
          {name: "Mixto", value: "mixto", other:
          {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "Especifique:"
            }, {
              "tag": "textarea",
              "type": "text",
              "name": "epHabitabilidad.caracteristicas.suelo.comentario",
              "value": "${epHabitabilidad.caracteristicas.suelo.comentario}",
              "placeholder": "Especifique",
              "class": "other",
            }]
          }},
        ]),
        jhEngine.fields.textareaField("Uso actual del terreno", "epHabitabilidad.caracteristicas.suelo.uso"),
        jhEngine.fields.checkboxFields("Infraestructura existente", [
          {name: "Iglesias", value: "epHabitabilidad.caracteristicas.infraestructura.iglesias"},
          {name: "Escuela", value: "epHabitabilidad.caracteristicas.infraestructura.escuela"},
          {name: "Energ\xEDa El\xE9ctrica", value: "epHabitabilidad.caracteristicas.infraestructura.energiaElectrica"},
          {name: "Carreteras", value: "epHabitabilidad.caracteristicas.infraestructura.carreteras"},
          {name: "Agua Potable", value: "epHabitabilidad.caracteristicas.infraestructura.aguaPotable"},
          {name: "Drenaje Sanitario", value: "epHabitabilidad.caracteristicas.infraestructura.drenajeSanitario"}
        ]),
        jhEngine.fields.textareaField("Servicios de Saludo (Especifique)", "epHabitabilidad.caracteristicas.infraestructura.serviciosSalud"),
        jhEngine.fields.textareaField("Otros (Especifique)", "epHabitabilidad.caracteristicas.infraestructura.otros"),
        {"tag":"h1", "html":"Distancia a"},
        jhEngine.fields.dimensionalField("R\xEDo", "epHabitabilidad.caracteristicas.distancia.rio", "m"),
        jhEngine.fields.dimensionalField("Quebrada", "epHabitabilidad.caracteristicas.distancia.quebrada", "m"),
        jhEngine.fields.dimensionalField("Nacimiento", "epHabitabilidad.caracteristicas.distancia.nacimiento", "m"),
        jhEngine.fields.dimensionalField("Barranco", "epHabitabilidad.caracteristicas.distancia.barranco", "m"),
        jhEngine.fields.dimensionalField("A pie de ladera", "epHabitabilidad.caracteristicas.distancia.pieLadera", "m"),
        jhEngine.fields.dimensionalField("A corona de ladera", "epHabitabilidad.caracteristicas.distancia.coronaLadera", "m"),
        jhEngine.fields.textareaField("Otros (Especifique)", "epHabitabilidad.caracteristicas.distancia.otros"),
      ]),
      jhEngine.fields.section("criteriosEstimacion", [
        {"tag":"h1", "html":"Porcentaje del terreno"},
        jhEngine.fields.dimensionalField("Menor a 5 grados", "epHabitabilidad.criteriosEstimacion.porcentajes.menorA5", "%"),
        jhEngine.fields.dimensionalField("Entre 5 a 15 grados", "epHabitabilidad.criteriosEstimacion.porcentajes.entre5y15", "%"),
        jhEngine.fields.dimensionalField("Mayor a 15 grados", "epHabitabilidad.criteriosEstimacion.porcentajes.mayorA15", "%"),
        jhEngine.fields.checkboxFields("Existen deslizamientos dentro del terreno", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.deslizamientos.existen", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "Cantidad observada"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.deslizamientos.cantidadObservada",
              "value": "${epHabitabilidad.criteriosEstimacion.deslizamientos.cantidadObservada}",
              "class": "other",
            },
            jhEngine.fields.textareaField("Describa las dimensiones promedio en metros", "epHabitabilidad.criteriosEstimacion.deslizamientos.dimensiones")]
          }}
        ]),
        {"tag":"h1", "html":"Presencia de indicadores de deslizamiento"},
        jhEngine.fields.checkboxFields("Agrietamientos en el terreno", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.indicadores.agrietamiento.existen", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "m\xB2 observados"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.agrietamiento.m2Afectados",
              "value": "${epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.agrietamiento.m2Afectados}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.checkboxFields("Nacimiento de agua dentro del terreno", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.indicadores.nacimientoAgua.existen", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "m\xB2 observados"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.nacimientoAgua.m2Afectados",
              "value": "${epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.nacimientoAgua.m2Afectados}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.checkboxFields("\xF1rboles o cercos torcidos", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.indicadores.arbolCercoTorcido.existen", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "m\xB2 observados"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.arbolCercoTorcido.m2Afectados",
              "value": "${epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.arbolCercoTorcido.m2Afectados}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.checkboxFields("Grietas en viviendas o infraestructura dentro del terreno", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.indicadores.grietas.existen", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "m\xB2 observados"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.grietas.m2Afectados",
              "value": "${epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.grietas.m2Afectados}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.checkboxFields("Ruptura de tuber\xEDa de drenaje o agua potable", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.indicadores.rupturaTuberia.existen", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "m\xB2 observados"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.rupturaTuberia.m2Afectados",
              "value": "${epHabitabilidad.criteriosEstimacion.deslizamientos.indicadores.rupturaTuberia.m2Afectados}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.checkboxFields("\xBFExisten \xE1reas suceptibles a inundaci\xF3n dentro del terreno?", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.susceptibilidadAInundaciones.existe", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "% del terreno afectado"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.susceptibilidadAInundaciones.terrenoAfectado",
              "value": "${epHabitabilidad.criteriosEstimacion.susceptibilidadAInundaciones.terrenoAfectado}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.checkboxFields("\xBFExisten zanjones, quebradas, r\xEDos y/o lagunas en el terreno?", [
          {name: "S\xED", value: "epHabitabilidad.criteriosEstimacion.riosLagunas.existe", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "% del terreno afectado"
            }, {
              "tag": "input",
              "type": "number",
              "name": "epHabitabilidad.criteriosEstimacion.riosLagunas.terrenoAfectado",
              "value": "${epHabitabilidad.criteriosEstimacion.riosLagunas.terrenoAfectado}",
              "class": "other",
            }]
          }}
        ]),
        jhEngine.fields.radioFields("Si existen \xE1reas con record de inundaci\xF3n, \xBFQu\xE9 nivel alcanz\xF3?", "epHabitabilidad.criteriosEstimacion.nivelInundacion", [
          {name: "Menor a 0.5 metros", value: "0.5-"},
          {name: "entre 0.5 y 1 metros", value: "0.5-1"},
          {name: "entre 1 y 1.5 metros", value: "1-1.5"},
          {name: "Mayor a 1.5 metros", value: "1.5+"},
        ]),
        {"tag":"div","class":"row","children":[
          {"tag":"img","src":"img/guiaNivelInundacion.png"}
        ]}

      ]),
      jhEngine.fields.section("condicionantes", [
        jhEngine.fields.checkboxFields("Condicionantes de no habitabilidad", [
          {name: "El terreno fue parcial o totalmente afectado por flujos de lodo y deslizamientos, tanto escarpes como dep\xF3sitos.", value:"epHabitabilidad.condicionantes.flujosDeLodoODeslizamientos"},
          {name: "El terreno es afectado por r\xEDos que cambiaron su cauce, aun y cuando se halla restablecido el flujo al cauce original (cauces migratorios).", value:"epHabitabilidad.condicionantes.cambioCauce"},
          {name: "El terreno se encuentra sobre abanicos aluviales.", value:"epHabitabilidad.condicionantes.abanicosAluviales"},
          {name: "El terreno est\xE1 a menos de 5 veces la altura de taludes verticales que superan los 2 metros de altura.", value:"epHabitabilidad.condicionantes.bajoTaludes"},
          {name: "El terreno esta sobre o bajo la ladera que presenta grietas o gradas en el terreno, indicativo de deslizamientos activos.", value:"epHabitabilidad.condicionantes.bajoLaderaConGrietas"},
          {name: "El terreno a urbanizar se encuentra dentro o bajo la influencia de deslizamientos antiguos o recientes.", value:"epHabitabilidad.condicionantes.influenciaDeslizamientos"},
          {name: "El terreno present\xF3 hist\xF3ricamente inundaciones con profundidades iguales o mayores a 1.50 metros.", value:"epHabitabilidad.condicionantes.inundacionesProfundas"},
          {name: "El terreno se encuentra dentro de la planicie de inundaci\xF3n (\xE1rea equivalente a 5 veces el ancho del cauce).", value:"epHabitabilidad.condicionantes.planicieInundacion"},
          {name: "El terreno total o parcialmente se encuentra sujeto a \xE1reas de anegamiento, encharcamiento o pantanos.", value:"epHabitabilidad.condicionantes.anegamientoEncharcamientoPantanos"}
        ])
      ]),
      jhEngine.fields.section("estimacion", [
        {"tag": "p", "style": "font-weight: bold", "html":"El terreno es habitable en su totalidad si se presentan las siguientes condiciones:"},
        {"tag": "p", "html":"El terreno tiene una pendiente menor o igual a 15 grados, no presenta indicadores de ser afectado por deslizamientos, flujos de lodo o inundaciones."},
        {"tag": "p", "style": "font-weight: bold", "html":"El terreno es parcialmente habitable o habitable con medidas de mitigaci\xF3n dadas las condiciones:"},
        {"tag":"ul","children":[
          {"tag":"li", "html":"En parte del terreno existen pendientes superiores a los 15 grados."},
          {"tag":"li", "html":"En parte del terreno hay indicadores de deslizamientos activos o inactivos."},
          {"tag":"li", "html":"En parte del terreno hay registro de deslizamientos historicos."},
          {"tag":"li", "html":"Existen zanjones, quebradas, nacimientos, r\xEDos o cuerpos de agua que afecten parte del terreno."}
        ]},
        {"tag": "p", "style": "font-weight: bold", "html":"El terreno es considerado no habitable en los siguientes casos:"},
        {"tag":"ul","children":[
          {"tag":"li", "html":"Si la totalidad del terreno tiene pendientes que superen los 15 grados."},
          {"tag":"li", "html":"Si es afirmativo alguno de los incisos de la secci\xF3n 5."},
          {"tag":"li", "html":"Si el nivel de inundaci\xF3n es igual o mayor a 1.5 metros."}
        ]},
        jhEngine.fields.textareaField("Conclusiones", "epHabitabilidad.estimacion.conclusiones")
      ]),
      jhEngine.fields.section("croquis", [
        jhEngine.fields.cameraField("Croquis del terreno", "epHabitabilidad.croquis.img")
      ]),
      jhEngine.fields.section("registroFotografico", [
        jhEngine.fields.cameraField("Foto panor\xE1mica", "epHabitabilidad.registroFotografico.panoramica.img"),
        jhEngine.fields.textareaField("\xBFQu\xE9 describe?", "epHabitabilidad.registroFotografico.panoramica.descripcion"),
        jhEngine.fields.cameraField("Foto general", "epHabitabilidad.registroFotografico.general.img"),
        jhEngine.fields.textareaField("\xBFQu\xE9 describe?", "epHabitabilidad.registroFotografico.general.descripcion"),
        jhEngine.fields.cameraField("Foto de detalles 1", "epHabitabilidad.registroFotografico.detalles.0.img"),
        jhEngine.fields.textareaField("\xBFQu\xE9 describe?", "epHabitabilidad.registroFotografico.detalles.0.descripcion"),
        jhEngine.fields.cameraField("Foto de detalles 2", "epHabitabilidad.registroFotografico.detalles.1.img"),
        jhEngine.fields.textareaField("\xBFQu\xE9 describe?", "epHabitabilidad.registroFotografico.detalles.1.descripcion"),
        jhEngine.fields.cameraField("Foto de detalles 3", "epHabitabilidad.registroFotografico.detalles.2.img"),
        jhEngine.fields.textareaField("\xBFQu\xE9 describe?", "epHabitabilidad.registroFotografico.detalles.2.descripcion"),
      ])
    ])
  ],
  blank: {},
  init: function() {
    util.baseInit();
  }
},

jhEngine.templates.erDanios = {
  fullname: "Da\xF1o en Edificaciones",
  transformation: [
    jhEngine.fields.sectionChooser([
      {name: "Datos Generales", value: "datosGenerales"},
      {name: "Ubicaci\xF3n del inmueble evaluado", value: "ubicacionInmueble"},
      {name: "Evento", value: "evento"},
      {name: "Datos del Inmueble", value: "datosInmueble"},
      {name: "Condiciones del \xC1rea", value: "condicionesArea"},
      {name: "Condiciones del Inmueble", value: "condicionesInmueble"},
      {name: "Clasificaci\xF3n Recomendada", value: "clasificacionRecomendada"},
      {name: "Croquis", value: "croquis"},
      {name: "Observaciones", value: "observaciones"}
    ]),
    jhEngine.fields.form([
      jhEngine.fields.section("datosGenerales", [
        jhEngine.fields.textField("Nombre del Evaluador", "erDanios.evaluador.nombre"),
        jhEngine.fields.textField("Instituci\xF3n", "erDanios.evaluador.institucion"),
        jhEngine.fields.dateField("Fecha", "erDanios.evaluacion.fecha", false),
        {"tag":"h1","html":"Cabezas de familia"},
        jhEngine.fields.textField("Hombre", "erDanios.cabezasFamilia.hombre.nombre"),
        jhEngine.fields.textField("C\xE9dula o DPI", "erDanios.cabezasFamilia.hombre.documentoID"),
        jhEngine.fields.numberField("Tel\xE9fono", "erDanios.cabezasFamilia.hombre.telefono", 8),
        jhEngine.fields.textField("Mujer", "erDanios.cabezasFamilia.mujer.nombre"),
        jhEngine.fields.textField("C\xE9dula o DPI", "erDanios.cabezasFamilia.mujer.documentoID"),
        jhEngine.fields.numberField("Tel\xE9fono", "erDanios.cabezasFamilia.mujer.telefono", 8),
      ]),
      jhEngine.fields.section("ubicacionInmueble", [
        jhEngine.fields.selectField("Departamento", "erDanios.inmueble.ubicacion.departamento", CONRED.departamentos),
        jhEngine.fields.textField("Municipio", "erDanios.inmueble.ubicacion.municipio"),
        jhEngine.fields.textField("Direcci\xF3n", "erDanios.inmueble.ubicacion.direccion"),
        jhEngine.fields.locationField("Direcci\xF3n", "erDanios.inmueble.ubicacion.coordenadas"),
        jhEngine.fields.numberField("No. de niveles", "erDanios.inmueble.cantidadNiveles"),
        jhEngine.fields.radioFields("", "erDanios.inmueble.propiedad", [
          {name: "Alquilada", value:"alquilada"},
          {name: "Propia", value:"propia"},
          {name: "Otros", value:"otros"},
        ])
      ]),
      jhEngine.fields.section("evento", [
        jhEngine.fields.textField("Nombre del Evento", "erDanios.evento.nombre"),
        jhEngine.fields.dateField("Fecha", "erDanios.evento.fecha", false),
        jhEngine.fields.imageFields("Tipo de evento", "erDanios.evento.tipo", [
          {name: "Deslizamiento", value:"deslizamiento", img: "img/deslizamiento.png"},
          {name: "Inundaci\xF3n", value:"inundacion", img: "img/inundacion.png"},
          {name: "Sismo", value:"sismo", img: "img/sismo.png"},
          {name: "Volc\xE1nico", value:"volcanico", img: "img/volcanico.png"},
          {name: "Viento Fuerte", value:"vientoFuerte", img: "img/vientoFuerte.png"},
        ])
      ]),
      jhEngine.fields.section("datosInmueble", [
        jhEngine.fields.radioFields("Uso del inmueble", "erDanios.inmueble.uso.tipo", [
          {name: "Vivienda", value: "vivienda"},
          {name: "Escuela", value: "escuela"},
          {name: "Centro de Salud", value: "centroSalud"},
          {name: "Iglesia", value: "iglesia"},
          {name: "Comercio", value: "comercio"},
          {name: "Edificio Municipal", value: "edificioMunicipal"},
          {name: "Sal\xF3n Comunal", value: "salonComunal"},
          {name: "Otro", value:"otro"}
        ]),
        jhEngine.fields.textField("Especifique", "erDanios.inmueble.uso.otro"),
        jhEngine.fields.radioFields("Material de techo", "erDanios.inmueble.techo.material", [
          {name: "L\xE1mina", value: "lamina"},
          {name: "Losa (terraza)", value: "losa"},
          {name: "Madera", value: "madera"},
          {name: "Teja", value: "teja"},
          {name: "Otro", value:"otro"}
        ]),
        jhEngine.fields.textField("Especifique", "erDanios.inmueble.techo.otro"),
        jhEngine.fields.radioFields("Material de muros o paredes", "erDanios.inmueble.muros.material", [
          {name: "Block", value: "block"},
          {name: "Ladrillo", value: "ladrillo"},
          {name: "Adobe", value: "adobe"},
          {name: "L\xE1mina", value: "lamina"},
          {name: "Madera", value: "madera"},
          {name: "Otro", value:"otro"}
        ]),
        jhEngine.fields.textField("Especifique", "erDanios.inmueble.muros.otro"),
        jhEngine.fields.radioFields("Material de piso", "erDanios.inmueble.piso.material", [
          {name: "Tierra", value: "tierra"},
          {name: "Cemento L\xEDquido", value: "cementoLiquido"},
          {name: "Cemento", value: "cemento"},
          {name: "Cer\xE1mico", value: "ceramico"},
          {name: "Otro", value:"otro"}
        ]),
        jhEngine.fields.textField("Especifique", "erDanios.inmueble.piso.otro"),
      ]),
      jhEngine.fields.section("condicionesArea", [
        {"tag":"h1", "html":"Ubicaci\xF3n de la infraestructura"},
        {"tag":"img", "src":"img/ubicacionInfraestructura.png", "style":"max-width: 100%; height: auto"},
        jhEngine.fields.radioFields("", "erDanios.area.condiciones.ubicacion", [
          {name: "Corona", value: "corona"},
          {name: "Ladera", value: "ladera"},
          {name: "Pie", value: "pie"},
          {name: "Planicie de Inundaci\xF3n", value: "planicieInundacion"},
          {name: "R\xEDo o quebrada", value: "rioQuebrada"},
        ]),
        jhEngine.fields.imageFields("Condiciones de la estructura en relaci\xF3n al terreno", "erDanios.area.condiciones.estructuraTerreno", [
          {name: "", value:"asentamientoDiferencial", img:"img/asentamientoDiferencial.png"},
          {name: "", value:"corrimiento", img:"img/corrimiento.png"},
          {name: "", value:"agrietamientoSuelo", img:"img/agrietamientoSuelo.png"},
          {name: "", value:"deslizamiento", img:"img/deslizamiento_.png"},
          {name: "", value:"derrumbe", img:"img/derrumbe.png"},
        ]),
        {"tag":"h1", "html":"En caso de inundaci\xF3n"},
        {"tag":"img","src":"img/alturaAgua.png"},
        jhEngine.fields.dimensionalField("Nivel del agua (H)", "erDanios.area.condiciones.alturaAgua", "metros"),
        jhEngine.fields.radioFields("Fuerza de la corriente", "erDanios.area.condiciones.fuerzaCorriente", [
          {name: "No perceptible", value: "noPerceptible"},
          {name: "Suave", value: "suave"},
          {name: "Medio", value: "medio"},
          {name: "Fuerte", value: "fuerte"},
        ])
      ]),
      jhEngine.fields.section("condicionesInmueble", [
        {"tag":"p","html":"(Marcar la condici\xF3n m\xE1s cr\xEDtica)"},

        jhEngine.fields.imageFields("","erDanios.inmueble.condicion",[
          {name: "", img:"img/danioMuroLeve.png", value: "danioMuroLeve"},
          {name: "", img:"img/danioTechoModerado.png", value: "danioTechoModerado"},
          {name: "", img:"img/danioTechoModerado.png", value: "danioTechoModerado"},
          {name: "", img:"img/colapsoParcial.png", value: "colapsoParcial"},
          {name: "", img:"img/elementosInclinados.png", value: "elementosInclinados"},
          {name: "", img:"img/edificioInclinado.png", value: "edificioInclinado"},
          {name: "", img:"img/colapsoTotal.png", value: "colapsoTotal"},
        ]),
      ]),
      jhEngine.fields.section("clasificacionRecomendada", [
        {"tag":"h1", "html":"Criterios"},
        {"tag":"p", "style":"font-weight: bold", "html":"Habitable"},
        {"tag":"p", "html":"Si no se encuentra en riesgo y si la estructura no tiene da\xF1o o el da\xF1o es leve."},
        {"tag":"p", "style":"font-weight: bold", "html":"Habitable parcialmente"},
        {"tag":"p", "html":"Si existe una parte de la vivienda en condici\xF3n habitable."},
        {"tag":"p", "style":"font-weight: bold", "html":"Inhabitable"},
        {"tag":"p", "html":"Si el da\xF1o en la estructura se encuentra de moderado a severo o si el sitio se encuentra en condici\xF3n de riesgo es decir, si se presenta asentamiento diferencial severo, corrimiento de la vivienda, agrietamiento en el suelo, deslizamiento, derrumbe, niveles de agua mayor a 1.50 metros, fuerza de la corriente de mediana a fuerte, al borde de una ladera, sobre la ladera, al pie de ladera sobre la ribera del r\xEDo."},
        {"tag":"h2", "html":"Riesgo"},
        jhEngine.fields.imageFields("","erDanios.clasificacion.riesgo",[
          {name:"", value:"sinRiesgo", img:"img/sinRiesgo.png"},
          {name:"", value:"enRiesgo", img:"img/enRiesgo.png"}
        ]),
        {"tag":"h2", "html":"Habitabilidad"},
        jhEngine.fields.imageFields("","erDanios.clasificacion.habitabilidad",[
          {name:"", value:"inhabitable", img:"img/inhabitable.png"},
          {name:"", value:"habitableParcialmente", img:"img/habitableParcialmente.png"},
          {name:"", value:"habitable", img:"img/habitable.png"}
        ])
      ]),
      jhEngine.fields.section("croquis", [
        jhEngine.fields.cameraField("Croquis", "erDanios.croquis.img")
      ]),
      jhEngine.fields.section("observaciones", [
        {"tag":"h1", "html":"Observaciones"},
        jhEngine.fields.textareaField("", "erDanios.observaciones.0"),
        jhEngine.fields.textareaField("", "erDanios.observaciones.1"),
        jhEngine.fields.textareaField("", "erDanios.observaciones.2")
      ])
    ])
  ],
  blank: {},
  init: function() {
    util.baseInit();
  }
},

jhEngine.templates.erCentrosEducativos = {
  fullname: "Centros Educativos",
  transformation: [
    jhEngine.fields.sectionChooser([
      {name: "Informaci\xF3n de Referencia", value: "infoReferencia"},
      {name: "Ubicaci\xF3n del Inmueble Evaluado", value: "ubicacionInmueble"},
      {name: "Evento", value: "evento"},
      {name: "Materiales de Construcci\xF3n", value: "materialesConstruccion"},
      {name: "Condiciones del Centro Educativo", value: "condicionesCentroEducativo"},
      {name: "Condiciones del \xC1rea", value: "condicionesArea"},
      {name: "Clasificaci\xF3n Recomendada", value: "clasificacionRecomendada"},
      {name: "Da\xF1o en Mobiliario, Equipo de C\xF3mputo y Material", value: "danioMobiliario"},
      {name: "Da\xF1os en Muros Perimetrales", value: "daniosPerimetrales"},
      {name: "Da\xF1os en Pisos", value: "daniosPisos"},
      {name: "Croquis", value: "croquis"},
    ]),
    jhEngine.fields.section("infoReferencia", [
      jhEngine.fields.textField("Nombre del Evaluador", "erDanios.evaluador.nombre"),
      jhEngine.fields.textField("Instituci\xF3n", "erDanios.evaluador.institucion"),
      jhEngine.fields.dateField("Fecha", "erDanios.evaluacion.fecha", false),
      jhEngine.fields.textField("Nombre CE", "erCE.centroEducativo.nombre"),
      jhEngine.fields.textField("C\xF3digo UDI", "erCE.centroEducativo.udi"),
      jhEngine.fields.numberField("Tel\xE9fono", "erCE.centroEducativo.telefono", 8),
      jhEngine.fields.textField("Director(a)", "erCE.centroEducativo.director.nombre"),
      jhEngine.fields.textField("C\xE9dula o DPI", "erCE.centroEducativo.director.id"),
      jhEngine.fields.numberField("Tel\xE9fono", "erCE.centroEducativo.director.telefono", 8),
      jhEngine.fields.radioFields("Propiedad", "erCE.centroEducativo.propiedad.tipo", [
        {name: "MINEDUC", value:"MINEDUC"},
        {name: "Municipal", value:"municipal"},
        {name: "Comunitario", value:"comunitario"},
        {name: "Privado", value:"privado"},
        {name: "Otro", value:"otro", other: {
            "tag": "div",
            "class": "row",
            "children": [{
              "tag": "label",
              "html": "Especifique"
            }, {
              "tag": "input",
              "type": "text",
              "name": "erCE.centroEducativo.propiedad.otro",
              "value": "${erCE.centroEducativo.propiedad.otro}",
              "class": "other",
            }]
          }},
      ])
    ]),
    jhEngine.fields.section("ubicacionInmueble", [
      jhEngine.fields.selectField("Departamento", "erCE.inmueble.ubicacion.departamento", CONRED.departamentos),
      jhEngine.fields.textField("Municipio", "erCE.inmueble.ubicacion.municipio"),
      jhEngine.fields.textField("Direcci\xF3n", "erCE.inmueble.ubicacion.direccion"),
      jhEngine.fields.locationField("Direcci\xF3n", "erCE.inmueble.ubicacion.coordenadas"),
    ]),
    jhEngine.fields.section("evento", [
      jhEngine.fields.textField("Nombre del Evento", "erCE.evento.nombre"),
      jhEngine.fields.dateField("Fecha", "erCE.evento.fecha", false),
      jhEngine.fields.imageFields("Tipo de evento", "erCE.evento.tipo", [
        {name: "Deslizamiento", value:"deslizamiento", img: "img/deslizamiento.png"},
        {name: "Inundaci\xF3n", value:"inundacion", img: "img/inundacion.png"},
        {name: "Sismo", value:"sismo", img: "img/sismo.png"},
        {name: "Volc\xE1nico", value:"volcanico", img: "img/volcanico.png"},
        {name: "Viento Fuerte", value:"vientoFuerte", img: "img/vientoFuerte.png"},
      ])
    ]),
    jhEngine.fields.section("materialesConstruccion", [
      jhEngine.fields.radioFields("Material de techo", "erCE.centroEducativo.materiales.techo.material", [
        {name: "L\xE1mina", value: "lamina"},
        {name: "Losa (terraza)", value: "losa"},
        {name: "Madera", value: "madera"},
        {name: "Teja", value: "teja"},
        {name: "Otro", value:"otro"}
      ]),
      jhEngine.fields.textField("Especifique", "erCE.centroEducativo.materiales.techo.otro"),
      jhEngine.fields.radioFields("Material de muros o paredes", "erCE.centroEducativo.materiales.muros.material", [
        {name: "Block", value: "block"},
        {name: "Ladrillo", value: "ladrillo"},
        {name: "Adobe", value: "adobe"},
        {name: "L\xE1mina", value: "lamina"},
        {name: "Madera", value: "madera"},
        {name: "Otro", value:"otro"}
      ]),
      jhEngine.fields.textField("Especifique", "erCE.centroEducativo.materiales.muros.otro"),
      jhEngine.fields.radioFields("Material de piso", "erCE.centroEducativo.materiales.piso.material", [
        {name: "Tierra", value: "tierra"},
        {name: "Cemento L\xEDquido", value: "cementoLiquido"},
        {name: "Cemento", value: "cemento"},
        {name: "Cer\xE1mico", value: "ceramico"},
        {name: "Otro", value:"otro"}
      ]),
      jhEngine.fields.textField("Especifique", "erCE.centroEducativo.materiales.piso.otro")
    ]),
    jhEngine.fields.section("condicionesCentroEducativo", [
      {"tag":"p","html":"(Marcar la condici\xF3n m\xE1s cr\xEDtica)"},

      jhEngine.fields.imageFields("","erCE.centroEducativo.condicion",[
        {name: "", img:"img/danioMuroLeve.png", value: "danioMuroLeve"},
        {name: "", img:"img/danioTechoModerado.png", value: "danioTechoModerado"},
        {name: "", img:"img/danioTechoModerado.png", value: "danioTechoModerado"},
        {name: "", img:"img/colapsoParcial.png", value: "colapsoParcial"},
        {name: "", img:"img/elementosInclinados.png", value: "elementosInclinados"},
        {name: "", img:"img/edificioInclinado.png", value: "edificioInclinado"},
        {name: "", img:"img/colapsoTotal.png", value: "colapsoTotal"},
      ])
    ]),
    jhEngine.fields.section("condicionesArea", [
      {"tag":"h1", "html":"Ubicaci\xF3n de la infraestructura"},
      {"tag":"img", "src":"img/ubicacionInfraestructura.png", "style":"max-width: 100%; height: auto"},
      jhEngine.fields.radioFields("", "erCE.area.condiciones.ubicacion", [
        {name: "Corona", value: "corona"},
        {name: "Ladera", value: "ladera"},
        {name: "Pie", value: "pie"},
        {name: "Planicie de Inundaci\xF3n", value: "planicieInundacion"},
        {name: "R\xEDo o quebrada", value: "rioQuebrada"},
      ]),
      jhEngine.fields.imageFields("Condiciones de la estructura en relaci\xF3n al terreno", "erCE.area.condiciones.estructuraTerreno", [
        {name: "", value:"asentamientoDiferencial", img:"img/asentamientoDiferencial.png"},
        {name: "", value:"corrimiento", img:"img/corrimiento.png"},
        {name: "", value:"agrietamientoSuelo", img:"img/agrietamientoSuelo.png"},
        {name: "", value:"deslizamiento", img:"img/deslizamiento_.png"},
        {name: "", value:"derrumbe", img:"img/derrumbe.png"},
      ]),
      {"tag":"h1", "html":"En caso de inundaci\xF3n"},
      {"tag":"img","src":"img/alturaAgua.png"},
      jhEngine.fields.dimensionalField("Nivel del agua (H)", "erCE.area.condiciones.alturaAgua", "metros"),
      jhEngine.fields.radioFields("Fuerza de la corriente", "erCE.area.condiciones.fuerzaCorriente", [
        {name: "No perceptible", value: "noPerceptible"},
        {name: "Suave", value: "suave"},
        {name: "Medio", value: "medio"},
        {name: "Fuerte", value: "fuerte"},
      ])
    ]),
    jhEngine.fields.section("clasificacionRecomendada", [
      {"tag":"h1", "html":"Criterios"},
      {"tag":"p", "style":"font-weight: bold", "html":"Habitable"},
      {"tag":"p", "html":"Si no se encuentra en riesgo y si la estructura no tiene da\xF1o o el da\xF1o es leve."},
      {"tag":"p", "style":"font-weight: bold", "html":"Habitable parcialmente"},
      {"tag":"p", "html":"Si existe una parte de la escuela en condici\xF3n habitable."},
      {"tag":"p", "style":"font-weight: bold", "html":"Inhabitable"},
      {"tag":"p", "html":"Si el da\xF1o en la estructura se encuentra de moderado a severo o si el sitio se encuentra en condici\xF3n de riesgo es decir, si se presenta asentamiento diferencial severo, corrimiento de la vivienda, agrietamiento en el suelo, deslizamiento, derrumbe, niveles de agua mayor a 1.50 metros, fuerza de la corriente de mediana a fuerte, al borde de una ladera, sobre la ladera, al pie de ladera sobre la ribera del r\xEDo."},
      {"tag":"h2", "html":"Riesgo"},
      jhEngine.fields.imageFields("","erCE.clasificacion.riesgo",[
        {name:"", value:"sinRiesgo", img:"img/sinRiesgo.png"},
        {name:"", value:"enRiesgo", img:"img/enRiesgo.png"}
      ]),
      {"tag":"h2", "html":"Habitabilidad"},
      jhEngine.fields.imageFields("","erCE.clasificacion.habitabilidad",[
        {name:"", value:"inhabitable", img:"img/inhabitable.png"},
        {name:"", value:"habitableParcialmente", img:"img/habitableParcialmente.png"},
        {name:"", value:"habitable", img:"img/habitable.png"}
      ])
    ]),
    jhEngine.fields.section("danioMobiliario", [
      {"tag":"h1", "html":"Escritorios"},
      jhEngine.fields.dimensionalField("Cantidad da\xF1o moderado", "erCE.centroEducativo.danio.escritorios.moderado", "escritorios"),
      jhEngine.fields.dimensionalField("Cantidad da\xF1o severo", "erCE.centroEducativo.danio.escritorios.severo", "escritorios"),
      jhEngine.fields.dimensionalField("Cantidad sin da\xF1o", "erCE.centroEducativo.danio.escritorios.sinDanio", "escritorios"),
      {"tag":"h1", "html":"C\xE1tedras"},
      jhEngine.fields.dimensionalField("Cantidad da\xF1o moderado", "erCE.centroEducativo.danio.catedras.moderado", "c\xE1tedras"),
      jhEngine.fields.dimensionalField("Cantidad da\xF1o severo", "erCE.centroEducativo.danio.catedras.severo", "c\xE1tedras"),
      jhEngine.fields.dimensionalField("Cantidad sin da\xF1o", "erCE.centroEducativo.danio.catedras.sinDanio", "c\xE1tedras"),
      {"tag":"h1", "html":"Pizarrones"},
      jhEngine.fields.dimensionalField("Cantidad da\xF1o moderado", "erCE.centroEducativo.danio.pizarrones.moderado", "pizarrones"),
      jhEngine.fields.dimensionalField("Cantidad da\xF1o severo", "erCE.centroEducativo.danio.pizarrones.severo", "pizarrones"),
      jhEngine.fields.dimensionalField("Cantidad sin da\xF1o", "erCE.centroEducativo.danio.pizarrones.sinDanio", "pizarrones"),
      {"tag":"h1", "html":"Equipo de c\xF3mputo"},
      jhEngine.fields.dimensionalField("Cantidad da\xF1o moderado", "erCE.centroEducativo.danio.equipoComputo.moderado", "equipos"),
      jhEngine.fields.dimensionalField("Cantidad da\xF1o severo", "erCE.centroEducativo.danio.equipoComputo.severo", "equipos"),
      jhEngine.fields.dimensionalField("Cantidad sin da\xF1o", "erCE.centroEducativo.danio.equipoComputo.sinDanio", "equipos"),
      {"tag":"h1", "html":"Material Educativo"},
      jhEngine.fields.dimensionalField("Cantidad da\xF1o moderado", "erCE.centroEducativo.danio.materialEducativo.moderado", "materiales"),
      jhEngine.fields.dimensionalField("Cantidad da\xF1o severo", "erCE.centroEducativo.danio.materialEducativo.severo", "materiales"),
      jhEngine.fields.dimensionalField("Cantidad sin da\xF1o", "erCE.centroEducativo.danio.materialEducativo.sinDanio", "materiales"),
    ]),
    jhEngine.fields.section("daniosPerimetrales", [
      {"tag":"img", "src":"img/desplome.png"},
      jhEngine.fields.checkboxFields("\xBFHay desplome?", [
        {name: "S\xED", value:"erCE.centroEducativo.danio.desplome"}
      ]),
      {"tag":"img", "src":"img/grietas.png"},
      jhEngine.fields.checkboxFields("\xBFHay grietas?", [
        {name: "S\xED", value:"erCE.centroEducativo.danio.grietas"}
      ])
    ]),
    jhEngine.fields.section("daniosPisos", [
      {"tag":"img", "src":"img/hundimientoGrietas.png"},
      jhEngine.fields.checkboxFields("\xBFHay hundimientos y/o grietas en el piso?", [
        {name: "S\xED", value:"erCE.centroEducativo.danio.hudimientoGrietasPiso"}
      ])
    ]),
    jhEngine.fields.section("croquis", [
      jhEngine.fields.cameraField("Croquis", "erCE.croquis.img")
    ])
  ],
  blank: {},
  init: function() {
    util.baseInit();
  }
}