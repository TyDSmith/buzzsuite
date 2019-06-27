const router = require("express").Router();
const googleRoutes = require("./google");
const userRoutes = require("./user");

// Google routes
router.use("/google",googleRoutes);

// Google routes
router.use("/user",userRoutes);


module.exports = router;