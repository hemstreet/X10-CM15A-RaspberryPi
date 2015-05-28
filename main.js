var utils = require('./lib/utilities'),
    express = require('express'),
    _ = require('underscore'),
    app = express();

app.get('/', function (req, res) {

});

app.get('/party/:status', function (req, res) {

    var outlets = {
        'ropeLight': 'a1',
        'stopLight' : 'a2',
        'martiniGlass' : 'a3'
    };

    var status = req.params.status;

    _.each(outlets, function(channel) {
        utils.execute('echo "pl ' + channel + ' ' + status + '" | nc localhost 1099', function () {
            console.log('completed');
        });
    });

    res.send('\nParty Mode!\n\n')

});

app.get('/:channel/:status', function (req, res) {

    var channel = req.params.channel,
        status = req.params.status;

    utils.execute('echo "pl ' + channel + ' ' + status + '" | nc localhost 1099', function () {
        console.log('completed');
    });

    res.send('\nSwitched ' + channel + ' to ' + status + '\n\n')
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);

});