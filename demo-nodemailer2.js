var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    // se puede agregar mas receptores mediannte una coma, ejemplo mail1,mail2
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    // para enviar en formato html en vez de texto utilice la propiedad html
    //html: '<h1>Welcome</h1><p>That was easy!</p>'
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});