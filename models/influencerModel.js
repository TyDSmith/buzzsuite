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
    type:Number,
    default:0
  }, 
  avgCPC: {
    type: Number,
    default:0
  }, 
  avgCPE: {
    type: Number,
    default:0
  }, 
  date: {
    type:Date,
    default: Date.now
  },
});

var influencerModel = mongoose.model("influencerCollections", influencerSchema);

module.exports = influencerModel;