const mongoose = require("mongoose")
const LoginUserSchema = mongoose.Schema({
    email : {
        type :String,
        required : true
    },
    password : {
        type : String,
        required :true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const loginUsers = mongoose.model("loginUsers", LoginUserSchema)
module.exports = loginUsers