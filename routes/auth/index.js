const router = require("express").Router();
const googleRoutes = require("./google");

// Twitter routes
router.use("/google",googleRoutes);

module.exports = router;