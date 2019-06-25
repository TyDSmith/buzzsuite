const db = require("../models");

// Defining methods for the.twitterModelsController
module.exports = {
  // MongoDB
  findAll: function(req, res) {
    db.userModel
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log (req.body)
    console.log (req.query)
    db.userModel
      .findOne({email: req.body})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.userModel
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) { 
    db.userModel
      .create(req.body)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.userModel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.userModel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Login

  signUp: (req, res) => {
    db.userModel
        .create(req.body)
        .then(dbModel => {res.json(dbModel)})
        .catch(err => res.status(422).json(err));
  },


  // signup: function(req, res) {
  //   db.userModel
  //     .create(req.body)
  //     .then(dbModel => {res.json(dbModel)})
  //     .catch(err => res.status(422).json(err));
  // },
  signIn: function(req, res) {
    db.userModel
      .findOne({email:req.body.email,password: req.body.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    
  },
  signOut: function(req, res) {
    // Token
    res.json("signOut route")
  },


  
};
