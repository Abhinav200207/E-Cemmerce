var express = require('express'); // importing express for handlling middleware and routes 
var app = express(); // creating instance of express
var errorMiddleware = require("./middleware/error") 


// Middleware - Middleware functions are functions that have
// access to the request object (req), the response object (res), 
// and the next middleware function in the application’s 
// request-response cycle. These functions are used to modify 
// req and res objects for tasks like parsing request bodies, 
// adding response headers, etc.
app.use(express.json()); // middleware for json response
app.use(errorMiddleware) // middleware for error response


var product = require('./Routes/productRoutes.js'); // import productRoutes
var customer = require('./Routes/coustomerRoutes'); // import customerRoutes

// connecting to server via url(learning hai yarr zyda nhi ata abhi, bas ya kerta hain)
app.use("/api/v1",product);
app.use("/api/v1",customer);


module.exports = app