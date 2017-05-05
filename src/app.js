const app = require('express')();
var Parser = require('./parser');

app.get('/', (req, res) => {
    res.status(200).send('Request Hearder Parser Microservice');
});

app.get('/api/whoami', (req, res) => {
    let parsedData = Parser.parseRequest(req);
    res.status(200).json(parsedData);
});

module.exports = app;