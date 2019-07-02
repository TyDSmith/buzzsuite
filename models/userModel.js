var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  index: {
    type:Number,
    
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

var userModel = mongoose.model("userCollections", userSchema);

module.exports = userModel;