const { getAllOrder, createOrder, deletOrder } = require("../Controllers/Order.controler")

const router = require("express").Router()

router.get("/getOrder", getAllOrder)

router.post("/createOrder", createOrder)

router.delete("/deleteOrder/:id", deletOrder)


module.exports =  router