var customer = require("../models/customerModel")
var ErrorHandler = require("../utils/errorHandling")
var catchAsyncError = require("../middleware/catchAsyncError")

exports.registerCustomers = catchAsyncError(async (req, res, next) => {
    var { name, email, password } = req.body

    var customer = await customer.create({
        name, email, password, avtar: {
            public_id: "12345", url: "link of photo"
        }
    })

    res.status(200).json({
        success:true,
        customer
    })
})