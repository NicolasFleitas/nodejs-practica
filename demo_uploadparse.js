var http = require('http');
var formidable = require('formidable');
// para cambiar la ruta del archivo subido
var fs = require('fs');
http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            //nueva linea para mover
            var oldpath = file.filetoupload.path;
            var newpath = 'oym-dev07@OYM-DEV07:~/Escritorio/nodejs' +
                files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved');
                res.end();
            });
            // res.write('Archivo subido al servidor');
            // res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit"');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);