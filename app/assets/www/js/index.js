document.addEventListener("deviceready", onDeviceReady, false);
var db = null;

function onDeviceReady() {
  document.addEventListener("backbutton", function(e) {
    navigator.notification.confirm(
      "\xBFDesea salir de la aplicaci\xF3n?",
    exitFromApp,
      "Salir",
      "No,Si");
  }, false);

  var dbPopulated = window.localStorage.getItem("edanrapidodbpopulated");
  if (dbPopulated == null) {
    db = window.openDatabase("edanRapido", "1.0", "EDÁN Rápido", 10000000);
    db.transaction(populateDB, errorCB, populateDBSuccess);
  }

  if (window.localStorage.getItem("edanrapidophonenumber") == null) getPhoneNumber();

  if (window.localStorage.getItem("edanrapidoserveraddress") == null){
    window.localStorage.setItem("edanrapidoserveraddress", "http://23.21.179.4/mp-conred");
    db.transaction(function(tx){
      tx.executeSql("INSERT INTO variables(variable_name, variable_value) VALUES ('server_address','http://192.168.1.10/services')");
    }, errorCB, null);
  }

}

function getPhoneNumber() {
  var num = prompt("Ingrese su n\xFAmero de tel\xE9fono:");
  while (!isNumber(num)) {
    num = prompt("Ingrese su n\xFAmero de tel\xE9fono:");
  }
  window.localStorage.setItem("edanrapidophonenumber", num);
  db.transaction(function(tx){
    tx.executeSql("INSERT INTO variables(variable_name, variable_value) VALUES ('phone_number','"+num+"')");
  }, errorCB, null);

}

function getPhoneNumber2() {
  var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
  telephoneNumber.get(function(result) {
    if (isNumber(result)) {
      navigator.notification.alert("N\xFAmero obtenido de tarjeta SIM: " + result,
      null,
        "ED\xC1N R\xE1pido",
        "OK");
      window.localStorage.setItem("edanrapidophonenumber", result);
      db.transaction(function(tx){
        tx.executeSql("INSERT INTO variables(variable_name, variable_value) VALUES ('phone_number','"+num+"')");
      }, errorCB, null);
    } else {
      var num = prompt("Ingrese su n\xFAmero de tel\xE9fono:");
      while (!isNumber(num)) {
        num = prompt("Ingrese su n\xFAmero de tel\xE9fono:");
      }
      window.localStorage.setItem("edanrapidophonenumber", num);
      db.transaction(function(tx){
        tx.executeSql("INSERT INTO variables(variable_name, variable_value) VALUES ('phone_number','"+num+"')");
      }, errorCB, null);
    }
  }, function() {
    var num = prompt("Ingrese su n\xFAmero de tel\xE9fono:");
    while (!isNumber(num)) {
      num = prompt("Ingrese su n\xFAmero de tel\xE9fono:");
    }
    window.localStorage.setItem("edanrapidophonenumber", num);
    db.transaction(function(tx){
      tx.executeSql("INSERT INTO variables(variable_name, variable_value) VALUES ('phone_number','"+num+"')");
    }, errorCB, null);
  });
}

function populateDB(tx) {
  tx.executeSql("DROP TABLE IF EXISTS form_types", [], function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS form_types(type_id INTEGER PRIMARY KEY AUTOINCREMENT, type_name TEXT)", [], function(tx) {
      tx.executeSql("INSERT INTO form_types(type_name) VALUES ('edanrapido')");
      tx.executeSql("INSERT INTO form_types(type_name) VALUES ('epSituacion')");
      tx.executeSql("INSERT INTO form_types(type_name) VALUES ('epHabitabilidad')");
      tx.executeSql("INSERT INTO form_types(type_name) VALUES ('erDanios')");
      tx.executeSql("INSERT INTO form_types(type_name) VALUES ('erCentrosEducativos')");
    });
  });

  tx.executeSql("DROP TABLE IF EXISTS form_data", [], function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS form_data(data_id INTEGER PRIMARY KEY AUTOINCREMENT, type_id INTEGER, rev_last_sent TEXT, rev_last_saved TEXT, form_name TEXT, form_data TEXT, FOREIGN KEY(type_id) REFERENCES form_types(type_id))");
  });

  tx.executeSql("DROP TABLE IF EXISTS pending_forms", [], function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS pending_forms(data_id INTEGER PRIMARY KEY, FOREIGN KEY(data_id) REFERENCES form_data(data_id))");
  });

  tx.executeSql("DROP TABLE IF EXISTS variables", [], function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS variables(variable_name TEXT PRIMARY KEY, variable_value TEXT)");
  });
}

function populateDBSuccess() {
  navigator.notification.alert("Base de datos creada exitosamente.",
  null,
    "ED\xC1N R\xE1pido",
    "OK");
  window.localStorage.setItem("edanrapidodbpopulated", "1");
}

function errorCB(err) {
  alert("Error processing SQL: " + err.message);
}