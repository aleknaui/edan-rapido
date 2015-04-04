cordova.define("cordova/plugin/scheduledtask",

function(require, exports, module) {
    var exec = require("cordova/exec");
    var ScheduledTask = function() {};

    var ScheduledTaskError = function(code, message) {
        this.code = code || null;
        this.message = message || '';
    };

    ScheduledTask.prototype.get = function(success, fail) {
        exec(success, fail, "ScheduledTask",
            "get", []);
    };

    var scheduledTask = new ScheduledTask();
    module.exports = scheduledTask;
});

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.scheduledTask) {
    window.plugins.scheduledTask = cordova.require("cordova/plugin/scheduledtask");
}