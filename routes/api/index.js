const router = require("express").Router();
const twitterRoutes = require("./twitter");

// Book routes
router.use("/twitter", twitterRoutes);

module.exports = router;