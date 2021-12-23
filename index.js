const express = require('express');
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
    console.log('New User Connected');
    socket.on('chat', function (data) {
        io.emit('chat_transfer', data);
    });
});


expressServer.listen(3000, function () {
    console.log('Server Run Success');
});