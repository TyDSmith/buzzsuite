var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var influencerSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  socialAccount: {
    type: String,
    required: true,
    unique: true
  },
  channel: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  accountURL: {
    type: String,
  },
  avgCPM: {
    type:Number
  }, 
  avgCPC: {
    type: Number
  }
});

var influencerModel = mongoose.model("influencerCollections", influencerSchema);

module.exports = influencerModel;