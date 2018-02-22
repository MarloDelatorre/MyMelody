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
        var newUser = new User();
        Object.assign(newUser, req.body);
        
        user.save((err, user) => {
            if (err) res.send(err);
            else res.jsonp(user)
        })
    });

router.route('/:username')
    // get one user
    .get((req, res) => {
        User.findOne(
            {username: req.params.username},
            (err, user) => {
                if (err) res.send(err);
                else res.jsonp(user)
            }
        )
    })
    // find and update a user
    .put((req, res) => {
        User.findOneAndUpdate(
            {username: req.params.username},
            {$set: req.body},
            (err, user) => {
                if (err) res.jsonp(err);
                else res.jsonp(user)
            }
        )
    });

module.exports = router;
