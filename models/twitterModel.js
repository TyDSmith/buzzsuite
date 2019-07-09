var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var twitterSchema = new Schema({
  bs_account_id: {
    type: String,
  },
  channel:{
      type: String
  },
  urlLink: {
    type: String
  },
  influencerAccount: {
      type : String,
      required: "Influencer Account Required"
  },
  service: {
      type : String
  },
  client: {
      type: String
  },
  date: {
      type: Date,
      default: Date.now
  },
  internalCost: {
      type: Number
  },
  markUP: {
      type: Number
  },
  MU: {
      type: Number
  },
  Cost: {
    type: Number,
    default: 0
  },
  CPM: {
      type: Number,
      default: 0
  },
  CPC: {
      type: Number,
      default: 0
  },
  CPE: {
      type: Number,
      default: 0
  },
  Impressions: {
      type: Number
  },
  Engagement: {
      type: Number
  },
  linkClicks:{
      type: Number
  },
  profileClicks: {
      type: Number
  },
  Likes: {
      type:Number
  },
  Replies: {
      type: Number
  },
  Retweets: {
      type: Number
  },
  detailsExpanded:{
      type: Number
  },
  mediaEngagement: {
      type: Number
  },
  X: {
      type: String,
      default: "X"
  }
});


const twitterModel = mongoose.model("twitterCollection", twitterSchema);

module.exports = twitterModel;