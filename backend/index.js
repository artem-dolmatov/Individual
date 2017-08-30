var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/headerForm', function(req, res) {
  var api_key = 'key-430a017b2d04af9af2d9cfd80e7a2c08';
  var domain = 'sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'tmn-drivingschool.ru <postmaster@sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org>',
    to: 'tmn-as72@yandex.ru',
    subject: 'Заявка из Шапки',
    html: "Имя: "+req.body.name+"<br />"+
    "Номер телефона: "+req.body.phone
  };

  mailgun.messages().send(data, function (error, body) {
    if(!error)
      res.sendStatus(200);
    else
      res.sendStatus(500);
  });
});

app.post('/entryForm', function(req, res) {
  var api_key = 'key-430a017b2d04af9af2d9cfd80e7a2c08';
  var domain = 'sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'tmn-drivingschool.ru <postmaster@sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org>',
    to: 'tmn-as72@yandex.ru',
    subject: 'Заявка из цены',
    html: "Имя: "+req.body.name+"<br />"+
    "Номер телефона: "+req.body.phone
  };

  mailgun.messages().send(data, function (error, body) {
    if(!error)
      res.sendStatus(200);
    else
      res.sendStatus(500);
  });
});

app.listen(3001, function() {
  console.log('Backend Started')
});
