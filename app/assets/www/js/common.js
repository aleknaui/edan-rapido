$(document).ready(function() {
	$(document).delegate(".btn.anchor", "click", function() {
		location.href = $(this).attr("href");
	});
});

function discard(buttonIndex) {
	if (buttonIndex == 2) {
		if (typeof(navigator.app) !== "undefined") {
			navigator.app.backHistory();
		} else {
			window.history.back();
		}
	}
}

function goBack() {
	if (typeof(navigator.app) !== "undefined") {
		navigator.app.backHistory();
	} else {
		window.history.back();
	}
}

function exitFromApp(buttonIndex) {
	if (buttonIndex == 2) {
		navigator.app.exitApp();
	}
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}