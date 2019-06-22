require("dotenv").config()

const router = require("express").Router();
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//const userController = require("../../controllers/userController");
const userModel = require("../../models/userModel")


passport.serializeUser((user, done)=> {
  console.log (user._id)
  done(null, user._id)
})

passport.deserializeUser((id, done)=> {
  userModel.findById(id).then((user) => {
    done(null, user)
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    userModel.findOne({google_id: profile.id,}).then((currentUser)=> {
      if (currentUser) {
        console.log ("user is: ", currentUser)
        done(null, currentUser)
      } else {
        new userModel({
          google_id: profile.id,
          displayName: profile.displayName,
          emails: profile.emails[0].value,
          photos: profile.photos[0].value
        }).save().then((newUser)=> {
          console.log ("New user created: ", newUser)
          done(null, newUser)
        });
      }
    })

    // new userModel({
    //   google_id: profile.id,
    //   displayName: profile.displayName,
    //   emails: profile.emails[0].value,
    //   photos: profile.photos[0].value
    // }).save().then((newUser)=> {
    //   console.log ("New user created: ", newUser)
    // });




    //API Route:

    //router.post("../../api/user", userController.create({body: {
      //     google_id: profile.id,
      //     displayName: profile.displayName,
      //     emails: profile.emails[0].value,
      //     photos: profile.photos[0].value
      //   }}), 
      //     (
      //   )
  }
));

router.route("/")
  .get(passport.authenticate('google', { scope: ['profile'] }));
  //.get(()=> {console.log ("google auth route")});

router.route("/callback")
  .get(passport.authenticate('google',
  { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('/logged-in')
  });

module.exports = router;