var express = require('express'); // importing express
const { registerCustomers } = require('../Controllers/customerController'); // importing registerCustomers

const router = express.Router(); // setting up router

router.route("/register").post(registerCustomers) // calling post operation on "/register" route

module.exports = router;