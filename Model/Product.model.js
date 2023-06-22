const mongoose = require("mongoose");

const ProductScehma = new mongoose.Schema({
    title : {
        type :String,
        required : ["true", "Title must be Required"]
    },
    desc : {
        type :String,
        required : ["true", "Description must be Required"]
    },
    price : {
        type :Number,
        required : ["true", "Price must be Required"]
    },
    categorie : {
        type : String,
        required : true 
    },
    createDate : {
        type : Date , 
        default : Date.now
    }
})

const Product = mongoose.model("product", ProductScehma)
module.exports = Product