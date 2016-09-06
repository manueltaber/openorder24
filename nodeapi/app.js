var express = require('express');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('keCwUyQdCYcmz1HWrvZxXK3A-UQAgOB_m9-h_2RlzauLKvytPj3PaldEmGYYcC0b', 'base64'),
  audience: '0DJoFS5T0CdBHW1E6ymfkDCXfxEbKTzm'
});

app.use('/', jwtCheck);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});