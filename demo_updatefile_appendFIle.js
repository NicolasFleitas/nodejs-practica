var fs = require('fs');
// el metodo appendFile agrega el contenido especificado
// al final del archivo
fs.appendFile('mynewfile1.txt', 'Este es mi texto',
    function(err) {
        if (err) throw err;
        console.log('Actualizado');
    });