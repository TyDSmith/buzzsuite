const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
  

  // Login

  signUp: (req, res) => {

    function createNewUser () {
      db.userModel
      .create(req.body)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err))
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password= hash
        createNewUser()
      });
    });
  },

  signIn: function(req, res) {
      
    db.userModel
      .findOne( { email:req.body.email } )
      .then((dbModel) => {
        
        bcrypt.compare(req.body.password, dbModel.password, function(err, result) {
          returnJSON(result)
        })
        
        function returnJSON (result) {
          if (result) {
            res.json(dbModel)
          } 
        }
      })
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.userModel
      .findOneAndUpdate({email: req.body.email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  userVerify: function(req, res) {
    db.userModel
      .findOne({ $and: [
        {email: req.body.email, firstName: req.body.firstName}
      ]}
        )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updatePassword: function(req, res) {
    function  updatePassword() {
      db.userModel
      .findOneAndUpdate({email:req.body.email},{password:req.body.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password= hash
        updatePassword();
      });
    });
  },
};
