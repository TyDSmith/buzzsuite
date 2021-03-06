const db = require("../models");

// Defining methods for the.twitterModelsController
module.exports = {
  findAll: function(req, res) {
    db.twitterModel
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.twitterModel
      .find({bs_account_id : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByInfluencer: function(req, res) {
    db.twitterModel
      .find({influencerAccount : req.params.account})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.twitterModel
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.twitterModel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.twitterModel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createInfluencer: function(req, res) {
    db.influencerModel
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllInfluencer: function(req, res) {
    db.influencerModel
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateAverage: function(req, res) {
    db.influencerModel
      .findOneAndUpdate({ socialAccount: req.params.account }, {avgCPM:req.body.avgCPM, avgCPC: req.body.avgCPC, avgCPE: req.body.avgCPE})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

