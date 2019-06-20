const router = require("express").Router();
const twitterRoutes = require("./twitter");

// Twitter routes
router.use("/twitter", twitterRoutes);

module.exports = router;