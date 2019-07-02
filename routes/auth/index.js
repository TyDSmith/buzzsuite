const router = require("express").Router();
const userRoutes = require("./user");

// Google routes
router.use("/user",userRoutes);

module.exports = router;