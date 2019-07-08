const router = require("express").Router();
const twitterController = require("../../controllers/twitterController");

// Matches with "/api/twitter"
router.route("/")
  .get(twitterController.findAll)
  .post(twitterController.create);

router
  .route("/campaign")
  .post(twitterController.create);

router
  .route("/campaign/:id")
  .get(twitterController.findById);

router
  .route("/influencer/:account")
  .get(twitterController.findByInfluencer)
  .post(twitterController.updateAverage);

router
  .route("/influencer")
  .get(twitterController.findAllInfluencer)
  .post(twitterController.createInfluencer);

module.exports = router;
