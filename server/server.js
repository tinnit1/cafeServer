require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())
app.get('/', function(req, res) {
    res.json('Hello world');
});
app.listen(process.env.PORT, () => {
    console.log('Esxuchando puerto: ', process.env.PORT);
});