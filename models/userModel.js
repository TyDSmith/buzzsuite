var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  google_id: {
    type: Number,
    required: "google id is required",
    unique: true
  },
  displayName: {
    type: String
  },
  email: {
    type: String
  },
  photos: {
    type: String
  },
});

var userModel = mongoose.model("userCollections", userSchema);
module.exports = userModel;