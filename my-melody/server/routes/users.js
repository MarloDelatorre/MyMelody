var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://avempaty:kirklan1@ds143738.mlab.com:43738/mymelody', ['users'])
//const mongoose = require('mongoose');

//Get all users
router.get('/', function(req, res, next) {
    db.users.find(function(err, users) {
       if(err) {
           res.send(err);
       } 
       res.json(users);
    });
});

//Get 1 user
router.get('/:id', function(req, res, next) {
   db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, user) {
      if(err) {
          res.send(err);
      }
       res.json(user);
   });
});

//Save 1 user
router.post('/', function(req, res, next) {
    var user = req.body;
    if(!user.username || !user.password || !user.firstName || !user.lastName) {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    } else {
        db.users.save(user, function(err, task) {
           if(err) {
               res.send(err);
           } 
            res.json(user);
        });
    }
});

//Update user
router.put('/:id', function(req, res, next) {
    var user = req.body;
    var updUser = {};
    db.users.update({_id: mongojs.ObjectId(req.params.id)}, function(err, user) {
       if(err) {
           res.send(err);
       } 
        res.json(user);
    });
});
module.exports = router;
