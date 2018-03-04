var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  router.post('/login/:username', passport.authenticate('login', {
		successRedirect: '/profile',
		failureRedirect: '/',
		failureFlash : true
	}));

  router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true
	}));

  return router;
}
