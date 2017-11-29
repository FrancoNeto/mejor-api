var INSTAGRAM_CLIENT_ID = '357603d91d62493584b5d65878a5b56d';
var INSTAGRAM_CLIENT_SECRET = '67bcda4348bb45b7b56a0c5ab668408d';
var API_URI = require('../app-settings').API_URI;

var strategies = {
  instagram: {
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: `${API_URI}/auth/instagram/callback` 
  }
}

module.exports = strategies;