const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	console.log("connection");
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(port, function() {
	console.log('listening on *:' + port);
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/radiou', function(req, res) {
	res.sendFile(__dirname + '/views/radiou.html');
});

app.post('/new_activity', function(req, res) {
	console.log(req.query);
	console.log(req.body);
	res.status(200).json({"message": "Success"});
});
