var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "pshekar"
  }, {
    id: 2,
    username: "avempaty"
  }]);
});

module.exports = router;
