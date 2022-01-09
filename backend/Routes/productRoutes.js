var express = require('express'); // import express 
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require('../Controllers/productController');
// importing all controller in Controller file

const router = express.Router(); // setting up route

router.route("/products").get(getAllProducts); // get all products at "/products" route
router.route("product/newproduct").post(createProduct) // create product at "product/newproduct" route
router.route("product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails) // update product at "product/{id}" route

module.exports = router;