const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Database/db"); 
dotenv.config()
const cors = require('cors');
const ProdutcRouter = require("./Routes/Product.Router");
const UserRouter = require("./Routes/User.routes"); 
const adminRouter = require("./Routes/Admin.route")
const OrderRouter = require("./Routes/Order.route")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
const PORT = process.env.PORT;
app.use("/product", ProdutcRouter)
app.use("/users", UserRouter)
app.use("/admin", adminRouter)
app.use("/order", OrderRouter)

// homeroute 
app.get("/", (req, res)=>{
     res.send("HOME ROUTES")
})

/// error habdler routes 
app.get((req, res, next) => {
    res.send("Routes Not Found")
})

app.listen(PORT, () => {
    console.log(`Server Is Running On Port : http://localhost:${PORT}`)
    connectDB()
})