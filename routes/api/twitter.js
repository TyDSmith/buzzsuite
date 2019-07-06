const router = require("express").Router();
const twitterController = require("../../controllers/twitterController");

// Matches with "/api/twitter"
router.route("/")
  .get(twitterController.findAll)
  .post(twitterController.create);

// Matches with "/api/twitter/:id"
router
  .route("/:id")
  .get(twitterController.findById)
  .put(twitterController.update)
  .delete(twitterController.remove);

router
  .route("/campaign")
  .post(twitterController.create);

router
  .route("/campaign/:id")
  .post(twitterController.findById);

router
  .route("/api/twitter/:account")
  .get(twitterController.findByInfluencer);

router
  .route("/influencer")
  .post(twitterController.createInfluencer);

  router
  .route("/influencer/:account")
  .get(twitterController.findByInfluencer)
  .put(twitterController.update)
  .delete(twitterController.remove);

module.exports = router;
