var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.cert', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var express = require('express');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('aCEgkyZG2C0kdyZ5R1zj65cW1ljYeqGFvvby_-pyWqObA2glqhYsDO5EH6vreIaB', 'base64'),
  audience: 'KboqPYz8chpw8IKuC7t0wHXR1K3QBGUX'
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.use('/secure', jwtCheck);

app.get('/insecure', function (req, res) {
  res.send('Hello World insecure!');
  console.log('insecure');
});

app.get('/secure', function (req, res) {
  res.send('Hello World secure!');
  console.log('secure');
  console.log(req.user)
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/