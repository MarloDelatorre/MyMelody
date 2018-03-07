var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  router.post('/login', function(req, res, next) {
      passport.authenticate('login', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { res.jsonp(null); }
        else { res.jsonp(user); }
      })(req, res, next);
  });

  router.post('/signup', function(req, res, next) {
      passport.authenticate('signup', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { res.jsonp(null); }
        else { res.jsonp(user); }
      })(req, res, next);
  });

  return router;
}
