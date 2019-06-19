require('dotenv').config();
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.use(routes);


//------------------------------------------------------------------ 
// Google Authentication with Passportjs

// const passport = require("passport")
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: '680992241397-06klhojkjdgm0g3qej2culnlulj3g47r.apps.googleusercontent.com',
//     clientSecret: 'eunWTrSiWOmu8RgbLD8WlYNb',
//     callbackURL: "/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log (accessToken)
    
//     console.log (profile)
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });
//   }
// ));

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile','email'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google'));
//   // { failureRedirect: '/' }),
//   // function(req, res) {
//   //   // Successful authentication, redirect home.
//   //   res.redirect('/');
//   // });

//------------------------------------------------------------------  

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_DB_BUZZSUITE, { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
