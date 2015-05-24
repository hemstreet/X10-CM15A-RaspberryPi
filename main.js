var exec = require('child_process').exec,
    express = require('express'),
    app = express();

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

app.get('/:channel/:status', function (req, res) {

    execute('echo "pl a1 off" | nc localhost 1099', function() {
        console.log('completed');
    });

    res.send('\nScrape Complete, Check Console!\n\n')
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Home Automation app listening at http://%s:%s', host, port);

});