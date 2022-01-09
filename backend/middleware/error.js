var ErrorHandler = require("../utils/errorHandling")

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server Error"

    if (err.message === "CastError"){
        err = new ErrorHandler(`Product not found ${err.path}`,400)
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}