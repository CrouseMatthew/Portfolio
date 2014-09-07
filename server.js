
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var nodemailer = require('nodemailer');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies

console.log("dir name: ",__dirname);
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

app.post('/test', function (rec, res){

console.log("the request ->", rec.body);

if(rec.body.verify === '4'){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mscrouse@gmail.com',
            pass: 'space.ONE123'
        }
    });
    transporter.sendMail({
        from: 'mscrouse@gmail.com',
        to: 'mscrouse@gmail.com',
        subject: "Portfolio Site Contact",
        text: 'Hello a person named ' + rec.body.name + " has sent you the following message: " +
        "\n\n" + rec.body.comments +"\n\n" +
        rec.body.email + "\n"
    });
};

});

app.listen(process.env.PORT || 8888);
console.log("Running server on ", 8888);



