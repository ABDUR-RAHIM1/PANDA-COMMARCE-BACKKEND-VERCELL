const Order = require("../Model/Order.model");

// get order
const getAllOrder = async (req , res)=>{
    const getOrder = await Order.find()
    try {
        res.status(200).json(getOrder)
    } catch (error) {
        res.status(500).json({message :"Internal Server Error"})
    }
}

// submit order
const createOrder = async (req, res)=>{
    
    const newOrder = await Order({
        name : req.body.name,
        email : req.body.email,
        presentAddress : req.body.presentAddress,
        permanentAddress : req.body.permanentAddress,
        phone : req.body.phone,
        city : req.body.city,
        zip : req.body.zip,
        order : req.body.order

    })
    // const newOrder = await Order(req.body)
    try {
        const order = await newOrder.save()
        res.status(200).json({message : "order is fully completed",order })
    } catch (error) {
        res.status(500).json({message :"Internal Server Error"})
    }
}


// delete order 
const deletOrder = async( req, res)=>{
   const deleteOrder = await Order.findByIdAndDelete(req.params.id)
   try {
      if(deleteOrder){
        res.status(200).json({message : "Order Cancel Succcessfully Done"})
      }else{
        res.status(200).json({message : "Order not found"})
      }
   } catch (error) {
       res.status(500).json({message : "Internal Server Error"})
   }
}

module.exports = {getAllOrder, createOrder, deletOrder}