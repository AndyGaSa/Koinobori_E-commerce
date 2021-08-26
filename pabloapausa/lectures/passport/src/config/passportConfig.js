const passport = require('passport');

require('./strategies/localStrategy');
require('./strategies/jwtStrategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
