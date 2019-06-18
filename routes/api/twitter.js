const router = require("express").Router();
const twitterController = require("../../controllers/twitterController");

// Matches with "/api/books"
router.route("/")
  .get(twitterController.findAll)
  .post(twitterController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(twitterController.findById)
  .put(twitterController.update)
  .delete(twitterController.remove);

module.exports = router;
