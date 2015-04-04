document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("backbutton", goBack, false);
}

$(document).ready(function() {
	$(".form-caller").click(callTemplate);
});

function callTemplate() {
	window.localStorage.setItem("edanrapidoformaction", "BLANK");
	window.localStorage.setItem("edanrapidoformtemplate", $(this).attr("form"));
	window.localStorage.setItem("edanrapidoformtype", $(this).attr("type"));
	window.localStorage.setItem("edanrapidoformid", -1);
	location.href = "form.html"
}