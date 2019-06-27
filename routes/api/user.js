const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/twitter"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// // Matches with "/api/twitter/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

//   router
//   .route("/influencer/:account")
//   .get(userController.findByInfluencer)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
