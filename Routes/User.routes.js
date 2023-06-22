const { getAllUsers, register, login, deleteUser } = require("../Controllers/User.controller");

const router = require("express").Router() 

// get all users
router.get("/getUser", getAllUsers)

// create a users 
router.post("/register", register)

// login user 
router.post("/login", login)

// delete user 
router.delete("/deleteUser/:id", deleteUser)

module.exports = router;