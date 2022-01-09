var Product = require("../models/productModel")
var ErrorHandler = require("../utils/errorHandling")
var catchAsyncError = require("../middleware/catchAsyncError")

exports.getAllProducts = catchAsyncError(async (req, res, next) => {

    var products = await Product.find()

    res.status(200).json({
        success: true,
        products
    })
})

exports.createProduct = catchAsyncError(async (req, res, next) => {

    var product = await Product.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
})

exports.getProductDetails = catchAsyncError(async (req, res, next) => {

    var product = await Product(req.params.id)

    if (!product) {
        return next(new ErrorHandler("product not found", 404))
    }


    res.status(200).json({
        sucesss: true,
        product
    })
}
)


// Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {

    var product = await Product(req.params.id)

    if (!product) {
        return next(new ErrorHandler("product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false
    })

    res.status(200).json({
        sucesss: true,
        product
    })
})


// Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {

    var product = await Product(req.params.id)

    if (!product) {
        return next(new ErrorHandler("product not found", 404))
    }

    await product.ramove()

    res.status(200).json({
        sucesss: true,
        message: "Product Deleted Sucessfully"
    })
})