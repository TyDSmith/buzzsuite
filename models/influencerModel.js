var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var influencerSchema = new Schema({

  accountName: {
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
  }
});

var influencerModel = mongoose.model("influencerCollections", influencerSchema);

module.exports = influencerModel;