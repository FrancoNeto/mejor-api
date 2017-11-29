var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.end();
});

module.exports = router;