var fs = require('fs')
    /*El fs.open()método toma una "bandera" como segundo argumento,
     si la bandera es "w" para "escribir",el archivo especificado
     se abre para escribir.Si el archivo no existe, se crea un archivo vacío:*/
    // crea un nuevo archivo vacio usando open()
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Guardado');
});