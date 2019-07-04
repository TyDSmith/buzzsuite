//const router = require("express").Router();
const router = require('express-promise-router')();
const UsersController = require("../../controllers/userController");

router
  .route("/signup")
  .post(UsersController.signUp);

router
  .route("/signin")
  .post(UsersController.signIn);

router
  .route("/forgotpassword")
  .post(UsersController.userVerify)
  .put(UsersController.updatePassword)
 
module.exports = router;