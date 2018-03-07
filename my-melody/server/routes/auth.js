var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  router.post('/login', passport.authenticate('login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash : true
	}));

  router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/profile',
		failureRedirect: '/register',
		failureFlash : true
	}));

  return router;
}
