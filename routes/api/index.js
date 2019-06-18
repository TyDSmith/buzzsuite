const router = require("express").Router();
const twitterRoutes = require("./twitter");
const authRoutes = require("./auth");

// Google Authenticate routes
// router.use("/auth", authRoutes);

// Twitter routes
router.use("/twitter", twitterRoutes);

module.exports = router;