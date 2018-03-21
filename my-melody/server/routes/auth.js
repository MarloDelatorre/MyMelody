var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  router.post('/login', function(req, res, next) {
      passport.authenticate('login', function(err, user, info) {
        if (err) { return next(err); }
        if (info) {
            if (info.message.includes('found')) {
                res.jsonp({message: "User not found"})
            }
            else if (info.message.includes('Invalid')) {
                res.jsonp({message: 'Invalid password'})
            }
        }
        if (user) { res.jsonp(user); }
      })(req, res, next);
  });

  router.post('/signup', function(req, res, next) {
      passport.authenticate('signup', function(err, user, info) {
        if (err) { return next(err); }
        if (info) {
            if (info.message.includes('Exists')) {
                res.jsonp({message: 'User already exists'});
            }
        }
        if (user) { res.jsonp(user); }
      })(req, res, next);
  });

  return router;
}
