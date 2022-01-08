var Product = require("../models/productModel")

exports.getAllProducts = async (req, res) => {

    var products = await Product.find()

    res.status(200).json({
        success: true,
        products
    })
}

exports.createProduct = async (req, res) => {
    
    var product = await Product.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
}

exports.updateProduct = async (req,res) => {

    var product = await Product(req.params.id)

    if (!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidator:true,
        useFindAndModify:false
    })

    res.status(200).json({
        sucesss:true,
        product
    })
}