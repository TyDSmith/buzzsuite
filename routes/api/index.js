const router = require("express").Router();
const twitterRoutes = require("./twitter");
const userRoutes = require("./user")

// Twitter routes
router.use("/twitter", twitterRoutes);
// User routes
router.use("/user", userRoutes);

module.exports = router;