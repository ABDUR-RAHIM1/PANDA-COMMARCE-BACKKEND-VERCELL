const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    adminName : {
        type :String,
        required : true
    },
    email : {
        type :String,
        required : true
    },
    password : {
        type :String,
        required : true
    },
    roll : {
        type :String,
        required : true
    },
})

const Admin = mongoose.model("Admin", AdminSchema)
module.exports = Admin;