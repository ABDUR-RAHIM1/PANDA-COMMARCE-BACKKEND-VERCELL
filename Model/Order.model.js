const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    presentAddress : {
        type : String,
        required : true,
    },
    permanentAddress : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    zip : {
        type : Number,
        required : true,
    },
    order : {
        type : Array,
         default : []
    },
    orderDate : {
        type : Date , 
        default : Date.now
    }
})

const Order = mongoose.model("Order", orderSchema)
module.exports =  Order;