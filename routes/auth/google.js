require("dotenv").config()

const router = require("express").Router();
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userController = require("../../controllers/userController");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    let user = {
      id: profile.id,
      displayName: profile.displayName,
      emails: profile.emails[0].value,
      photos: profile.photos[0].value
    }

    console.log (user)
    //userController.create(user)
  }
));

router.route("/")
  .get(passport.authenticate('google', { scope: ['profile','email'] }));

router.route("/callback")
  .get(passport.authenticate('google'));

module.exports = router;