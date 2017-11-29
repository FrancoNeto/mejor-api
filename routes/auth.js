var express = require('express');
var router = express.Router();
var passportInstagram = require('../auth/instagram');
var WEBAPP_URI = require('../app-settings').WEBAPP_URI;

var isAuthenticated = require('../utils/utils');

router.get('/instagram',
  passportInstagram.authenticate('instagram'));

router.get('/instagram/callback',
  passportInstagram.authenticate('instagram', {
    successRedirect: `${WEBAPP_URI}/app?authenticated=success`
  }));

router.get('/authenticate', (req, res, next) => {
  return res.json(req.user);
});

router.get('/logout', isAuthenticated, (req, res) => {
  req.session.destroy(err => {
    return res.status(200).json({
      msg: "logout with success"
    });
  });
});

module.exports = router;