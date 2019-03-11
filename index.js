const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const http = require('http').Server(app);
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

http.listen(port, function() {
	console.log('listening on *:' + port);
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/radiou', function(req, res) {
	res.sendFile(__dirname + '/views/radiou.html');
});

