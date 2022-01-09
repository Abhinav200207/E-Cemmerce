var express = require('express');
var app = express();

var errorMiddleware = require("./middleware/error")

app.use(express.json());

var product = require('./Routes/productRoutes.js');
var customer = require('./Routes/coustomerRoutes');

app.use("/api/v1",product);
app.use("/api/v1",customer);
app.use(errorMiddleware)

module.exports = app