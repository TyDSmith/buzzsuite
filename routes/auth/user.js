//const router = require("express").Router();
const router = require('express-promise-router')();
const UsersController = require("../../controllers/userController");
const { validateBody, schemas } = require("../routeHelper")

// const passport = require('passport');
// const passportSignIn = passport.authenticate('local', { session: false });
// const passportJWT = passport.authenticate('jwt', { session: false });

router
  .route("/signup")
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router
  .route("/signin")
  .post(UsersController.signIn);

router
  .route("/forgotpassword")
  .post(UsersController.userVerify)
  .put(UsersController.updatePassword)
  //.post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

// router.route('/forgotPassword')
//   .update(UsersController.update);

module.exports = router;