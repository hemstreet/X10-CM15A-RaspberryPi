var exec = require('child_process').exec;

var utils = {
    execute: function(command, callback) {
        exec(command, function (error, stdout, stderr) {
            callback(stdout);
        });
    }
};

module.exports = utils;