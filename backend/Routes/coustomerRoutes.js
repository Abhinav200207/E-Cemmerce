var express = require('express');
const { registerCustomers } = require('../Controllers/customerController');

const router = express.Router();

router.route("/register").post(registerCustomers)

module.exports = router;