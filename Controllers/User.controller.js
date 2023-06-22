const Users = require("../Model/User.model");
const  loginUsers = require("../Model/loginUsers.model")

// get all users 
const getAllUsers = async(req, res) => {
    try {
        const user = await Users.find()
        res.status(201).json({ message: "All User", user })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//// create a user 

const register = async(req, res) => {

    const newUser = await Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const findUser = await Users.findOne({ email: req.body.email })
        if (findUser) {
            res.status(400).json({ message: "The email has already been used" })
        } else {
            const user = await newUser.save()
            res.status(200).json({ message: "user created successfully", user })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// login user 

const login = async(req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (user && user.password === req.body.password) {
            const oneUser = await loginUsers.findOne({ email: req.body.email })
            if (!oneUser) {
                const loginUser = await loginUsers({
                    email : req.body.email,
                    password : req.body.password
                })
                const user = await loginUser.save()
                res.status(200).json({message :"logged In successfully", user})
            }else{
                res.status(200).json({message :"logged In successfully", user})
            }

          
        } else {
            res.status(401).json({message :"Please Provide a Valid Information"})
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/// delete user 

const deleteUser =async (req, res) => {
    try {
        const deletUser = await Users.findByIdAndDelete(req.params.id)
        if (deletUser) {
            await res.status(200).json({message :"User Delete SuccesFull"})
        }else{
            await res.status(404).json({message :"User not Found"})
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = { getAllUsers, register, login, deleteUser }