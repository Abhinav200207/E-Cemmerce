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

    var token = customer.getJWTToken()

    res.status(200).json({
        success: true,
        token
    })
})


exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHander("Email & Password required", 400));
    }

    const customer = await User.findOne({ email }).select("+password");

    if (customer == null) {
        return next(new ErrorHander("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHander("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
});