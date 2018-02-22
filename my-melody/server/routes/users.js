var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user');

var router = express.Router();

router.route('/')
    // get all users
    .get((req, res) => {
        User.find({}, (err, users) => {
            if (err) res.send(err);
            else res.jsonp(users);
        })
    })
    // save new user
    .post((req, res) => {
        var user = new User();
        user = Object.assign(req.body, user);
        
        user.save((err, u) => {
            if (err) res.send(err);
            else res.jsonp(u)
        })
    });

router.route('/:id')
    // get one user (by _id)
    .get((req, res) => {
        User.findOne({_id: mongoose.Types.ObjectId(req.params.id)}, (err, user) => {
            if (err) res.send(err);
            else res.jsonp(user)
        })
    })
    // find and update a user (by _id)
    .put((req, res) => {
        User.findOneAndUpdate(
            {_id: mongoose.Types.ObjectId(req.params.id)},
            {$set: req.body},
            (err, user) => {
                if (err) res.jsonp(err);
                else res.jsonp(user)
            }
        )
    });

module.exports = router;
