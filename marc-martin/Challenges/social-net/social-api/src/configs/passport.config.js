const passport = require('passport');

require('./passport-strategy/local.strategy');
require('./passport-strategy/jwt.strategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
