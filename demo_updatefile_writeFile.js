var fs = require('fs')
    // writeFile reemplaza el contenido del archivo
fs.writeFile('mynewfile3.txt', 'Este es mi otro texto',
    function(err) {
        if (err) throw err;
        console.log('Contenido reemplazado');
    });