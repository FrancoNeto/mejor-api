var passport = require('passport');
var User = require('../db/schema/user');

function init() {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

};


module.exports = init;
