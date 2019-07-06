
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ty_buzzsuite",
  { useNewUrlParser: true }
);

const twitterData = [
  {
    bs_account_id: 11,
    urlLink: "https://twitter.com/crypto_sarah9/status/1139874778926518272",
    influencerAccount: "@Vizio",
    channel: "Twitter",
    service: "Tweet",
    client: "Vizio",
    internalCost: 200,
    markUP: 85,
    MU: 42.5,
    CPM: 16.51,
    CPC: 6.63,
    CPE: 1.18,
    Impressions: 17586,
    Engagement: 241,
    linkClicks: 43,
    profileClicks: 5,
    Likes: 51,
    Replies: 24,
    Retweets: 52,
    detailsExpanded: 22,
    mediaEngagement: 80
  },
  {
    bs_account_id: 10,
    urlLink: "https://twitter.com/crypto_sarah9/status/1139874778926518272",
    influencerAccount: "@Sony",
    channel: "Twitter",
    service: "Tweet",
    client: "Sony",
    internalCost: 200,
    markUP: 85,
    MU: 42.5,
    CPM: 16.51,
    CPC: 6.63,
    CPE: 1.18,
    Impressions: 17586,
    Engagement: 241,
    linkClicks: 43,
    profileClicks: 5,
    Likes: 51,
    Replies: 24,
    Retweets: 52,
    detailsExpanded: 22,
    mediaEngagement: 80
  },
  {
    bs_account_id: 12,
    urlLink: "https://twitter.com/crypto_sarah9/status/1139874778926518272",
    influencerAccount: "@Target",
    channel:"Twitter",
    service: "Tweet",
    client: "Target",
    internalCost: 200,
    markUP: 85,
    MU: 42.5,
    CPM: 16.51,
    CPC: 6.63,
    CPE: 1.18,
    Impressions: 17586,
    Engagement: 241,
    linkClicks: 43,
    profileClicks: 5,
    Likes: 51,
    Replies: 24,
    Retweets: 52,
    detailsExpanded: 22,
    mediaEngagement: 80
  },
  {
    bs_account_id: 13,
    urlLink: "https://twitter.com/crypto_sarah9/status/1139874778926518272",
    influencerAccount: "@StaterBrother",
    channel:"Twitter",
    service: "Tweet",
    client: "Stater Brothers",
    internalCost: 200,
    markUP: 85,
    MU: 42.5,
    CPM: 16.51,
    CPC: 6.63,
    CPE: 1.18,
    Impressions: 17586,
    Engagement: 241,
    linkClicks: 43,
    profileClicks: 5,
    Likes: 51,
    Replies: 24,
    Retweets: 52,
    detailsExpanded: 22,
    mediaEngagement: 80
  },
  {
    bs_account_id: 14,
    urlLink: "https://twitter.com/crypto_sarah9/status/1139874778926518272",
    influencerAccount: "@LakersNBA",
    channel: "Twitter",
    service: "Tweet",
    client: "Lakers",
    internalCost: 200,
    markUP: 85,
    MU: 42.5,
    CPM: 16.51,
    CPC: 6.63,
    CPE: 1.18,
    Impressions: 17586,
    Engagement: 241,
    linkClicks: 43,
    profileClicks: 5,
    Likes: 51,
    Replies: 24,
    Retweets: 52,
    detailsExpanded: 22,
    mediaEngagement: 80
  },
];
// console.log(db.twitterModel)
db.twitterModel
  .remove({})
  .then(() => db.twitterModel.insertMany(twitterData))
  .then(data => {
    console.log(data)
    // console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
