var express = require('express');
var app = express();

app.use(express.json());

var product = require('./Routes/productRoutes.js');

app.use("/api/v1",product);

module.exports = app