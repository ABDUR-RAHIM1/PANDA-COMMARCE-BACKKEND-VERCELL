const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : [true , "Email has been allready exist"]
    },
    password : {
        type : String,
        required : true,
    },
    date :{
        type : Date,
        default : Date.now,
    }
})

const Users = mongoose.model("User", UserSchema)
module.exports = Users
