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
        if (user) {
            req.logIn(user, function(err) {
                if (err) { return next(err); }
            })
            res.jsonp(user);
        }
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
        if (user) {
            req.logIn(user, function(err) {
                if (err) { return next(err); }
            })
            res.jsonp(user);
        }
      })(req, res, next);
  });

  router.get('/logout', function(req, res) {
      req.logout();
      res.jsonp({message: 'logged out'})
  })

  router.get('/loggedIn', function(req, res, next) {
    // isAuthenticated is set by `deserializeUser()`
    if (!req.isAuthenticated || !req.isAuthenticated()) {
        res.jsonp({loggedIn: false})
    }
    else {
        res.jsonp({
            loggedIn: true,
            user: req.user
        })
    }
 })

  return router;
}
