require('dotenv').config();
const express = require("express");
// const cors = require("cors");

const cookieSession = require("cookie-session")

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
// Cookie Session 

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys:["BuzzSuite"]
}));

// Passport initialize

// app.use(passport.initialize());
// app.use(passport.session());

// Add routes, both API and view
app.use(routes);
app.get("/*", (req, res) => {
  res.redirect("/")
})



// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_DB_BUZZSUITE, { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
