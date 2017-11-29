var express = require('express');
var router = express.Router();

var User = require('../db/schema/user');


var isAuthenticated = require('../utils/utils');

router.use(isAuthenticated);

/* GET users listing. */
router.get('/:_id', (req, res, next) => {
  User.findById(req.params._id, (err, user) => {
    if (err) next(err);
    res.json(user);
  });
});

/* Put user. */
router.put('/:_id', (req, res, next) => {
  var userData = req.body;

  User.findById(req.params._id,(err, user) => {
    if (err) next(err);
    user.birth_date = userData.birth_date ? userData.birth_date : null;
    user.city = userData.city ? userData.city : null;
    user.education = userData.education ? userData.education: null;
    user.occupation = userData.occupation ? userData.occupation : null;
    user.email = userData.email ? userData.email : null;
    user.full_name = userData.full_name; 
    user.save((err, data) => {
      if (err) return res.status(500).send('User can not updated!');
      res.set(setHeaderSuccessMessage('Perfil updated with success!'));
      res.json(data);
    });
  });

  function setHeaderSuccessMessage(msg) {
    return {
      'msg': msg
    }
  }

});
module.exports = router;