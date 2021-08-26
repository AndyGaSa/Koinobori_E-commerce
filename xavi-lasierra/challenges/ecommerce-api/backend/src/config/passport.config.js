const passport = require('passport');

require('./passport-strategy/jwtStrategy');
require('./passport-strategy/localStrategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
