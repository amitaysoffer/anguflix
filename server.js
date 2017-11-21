var express = require('express')
var app = express();

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

var port = 8000;
app.listen(port, function(){
    console.log('app listening on port ' + port);
});

