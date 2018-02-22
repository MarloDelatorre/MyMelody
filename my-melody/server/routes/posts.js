var express = require('express');
var mongoose = require('mongoose');
var Post = require('../models/post');
var Track = require('../models/track');

var router = express.Router();

router.route('/')
    // get all all posts 
    // TODO: JOIN on trackId
    .get((req, res) => {
        Post.find({}, (err, posts) => {
            if (err) res.send(err);
            else res.jsonp(posts);
        })
    })
    // save new post 
    .post((req, res) => {
        var track = new Track();
        track = Object.assign(req.body.track.id, track);

        Track.findOneAndUpdate(
            
        )
        .then(track => {
            var post = new Post();
            post.trackId = track._id;
            post.caption = req.body.caption
            post.userId = req.body.userId

            post.save((err, p) => {
                if (err) res.send(err);
                else res.jsonp(p);
            })
        })
        .catch(err => {
            console.error(err);
            res.send(err);
        })
    })

router.route('/:userid')
    // get all posts made by userid
    .get((req, res) => {
        // TODO: join with track document 
        Post.find({userId: req.params.userid}, (err, posts) => {
            if (err) res.send(err);
            else res.jsonp(posts);
        })
    })

/* TODO: update and delete posts
router.route('/:postid')
    .put((req, res) => {

    })
*/
module.export = router;