var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hola contenido!', function(err) {
    if (err) throw err;
    console.log('Guardado');
});