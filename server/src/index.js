const express = require('express')();
const http = require('http').Server(express);
const io = require('socket.io')(http);

express.get('/', (req, res) => {
    res.send('Connected!');
});

http.listen(8000, () => {
    console.log('Listening at port 8000');
});

let connections = [];

io.on('connection', socket => {
    const id = socket.id;
    connections.push(id);

    console.log(id + ' connected.');

    socket.on('disconnect', () => {   
        const index = connections.indexOf(id);
        connections.splice(index, 1);

        console.log(id + ' disconnected.');
    });
});