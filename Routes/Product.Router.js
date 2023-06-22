const { addProduct, getAllProducts, deleteProduct } = require("../Controllers/Product.controller")
const router = require("express").Router() 

// get all products
router.get("/all", getAllProducts)

// add product 
router.post("/addProduct", addProduct)

// delete products
router.delete('/deleteProduct/:id', deleteProduct)

module.exports = router