var express = require('express');
var app = express();
var port = 3000;


app.use('/assets', express.static(__dirname + '/assets'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port);