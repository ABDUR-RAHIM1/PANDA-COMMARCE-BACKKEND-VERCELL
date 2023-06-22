const Admin = require("../Model/Admin.model")


/// get a admin 

const getAdmin = async(req, res)=>{
   try {
    const getAdmin = await Admin.find()
    res.status(200).json({message :" get Admin", getAdmin})
   } catch (error) {
        res.status(500).json({message :"Inernal Server Error"})
   }
}


// create a admin 
const creatAdmin = async(req, res)=>{
    const newAdmin = await Admin({
        adminName : "Abdur Rahim",
        email : "abdurrahim88557@gmail.com",
        password : "myadmin",
        roll  : "Admin"
    })

    try {
        const admin = await newAdmin.save()
        res.status(200).json({message : "Admin Created Succesfull", admin})
    } catch (error) {
         res.status(500).json({message :"Internal Server Error"})
    }
}


/// login admin 

const loginAdmin = async(req, res)=>{
    const admin = await Admin.findOne({email : req.body.email})
     try {
        if(admin && admin.password === req.body.password && admin.roll === req.body.roll){
            res.status(200).json({message : "login successfully", admin})
          }else{
             res.status(401).json({message : "Please Provide Valid email or password"})
          }
     } catch (error) {
          res.status(500).json({message :"Internal server Error"})
     }
}

module.exports = {creatAdmin, getAdmin, loginAdmin}