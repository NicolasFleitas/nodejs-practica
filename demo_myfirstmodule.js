/*Incluir el modulo creado en el archivo myfisrtmodule.js*/
var http = require('http');
var dt = require('./myfirstmodule'); // mi modulo creado

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("La fecha y hora actual es: " + dt.myDateTime());
    res.end();
}).listen(8080);