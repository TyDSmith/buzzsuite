var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  google_id: {
    type: String,
    required: "google id is required",
    unique: true
  },
  displayName: {
    type: String
  },
  emails: {
    type: String
  },
  photos: {
    type: String
  },
});

var userModel = mongoose.model("userCollections", userSchema);

module.exports = userModel;