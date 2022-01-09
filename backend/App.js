var express = require('express');
var app = express();

var errorMiddleware = require("./middleware/error")

app.use(express.json());

var product = require('./Routes/productRoutes.js');

app.use("/api/v1",product);
app.use(errorMiddleware)

module.exports = app