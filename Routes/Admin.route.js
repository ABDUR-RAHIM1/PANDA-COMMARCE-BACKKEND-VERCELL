const { creatAdmin, getAdmin, loginAdmin } = require("../Controllers/Admin.controller");

const router = require("express").Router() 

// get a admin
router.get("/getAdmin", getAdmin)

//// create a admin 
router.post('/admin', creatAdmin)

/// admin login 
router.post('/loginAdmin', loginAdmin)

module.exports = router;