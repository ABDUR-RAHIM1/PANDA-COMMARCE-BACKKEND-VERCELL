const Product = require("../Model/Product.model")

// get all products
const getAllProducts = async(req, res)=>{
    try {
        const products =  await Product.find()
        res.status(200).json({message : "products get succcesfully" ,products})
    } catch (error) {
        res.status(500).json({message :"Internal Server Error"})
    }
}

// add products
const addProduct = async(req, res)=>{
    const {title, desc , price, categorie} = req.body; 
    const newProduct = await Product({
        title : title,
        desc : desc,
        price :price , 
        categorie : categorie,
    })
    try {
        await newProduct.save()
        await res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({massege :"Shomthing went wrong on your server"})
    }
 
}


const deleteProduct = async (req, res)=>{
   try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    if (deleteProduct) {
        await res.status(200).json({message :"Product Delete SuccesFull" , deleteProduct})
    }else{
        await res.status(404).json({message :"Product not Found"})
    }
}catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
}
    
}



module.exports = {addProduct ,getAllProducts, deleteProduct}