var utils = require('./lib/utilities'),
    express = require('express'),
    app = express();

app.get('/:channel/:status', function (req, res) {

    var channel = req.params.channel,
        status = req.params.status;

    utils.execute('echo "pl ' + channel + ' ' + status + '" | nc localhost 1099', function() {
        console.log('completed');
    });

    res.send('\nSwitched ' + channel + ' to ' + status + '\n\n')
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Home Automation app listening at http://%s:%s', host, port);

});