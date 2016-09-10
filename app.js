const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/images",  express.static(__dirname + '/public/images'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(8080);
