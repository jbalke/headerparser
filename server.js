/*var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.send('Listening on port ' + PORT)
});

app.listen(PORT, function () {
  console.log('Request header parser microservice listening on port ' + PORT);
})*/

const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Request header parser microservice listening on port ' + PORT);
});