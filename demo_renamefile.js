var fs = requiere('fs')
    //renombrar archivos
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err;
    console.log('Archivo renombrado');
});