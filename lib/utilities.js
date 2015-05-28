var exec = require('child_process').exec;

var utils = {
    execute: function(command, callback) {
        exec(command, function (error, stdout, stderr) {
            callback(stdout);
        });
    },
    toggle: function(channel, status) {
        utils.execute('echo "pl ' + channel + ' ' + status + '" | nc localhost 1099', function () {
            console.log(channel, status);
        });
    }
};

module.exports = utils;