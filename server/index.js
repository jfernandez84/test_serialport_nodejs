const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, function () {
    console.log('server on port', 3000);
});


const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;

const port = new Serialport('/dev/ttyUSB0', {
    baudRate: 9600
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('open', function () {
    console.log('la conexión está abierta');
});

parser.on('data', function (data) {
    console.log('coordenadas', data)
    io.emit('coordenadas', data.toString());
  })
