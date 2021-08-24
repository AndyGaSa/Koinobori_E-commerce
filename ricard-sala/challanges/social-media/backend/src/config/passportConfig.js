const passport = require('passport');

require('./passportStrategy/localStrategy');
require('./passportStrategy/jwtConfig');

function passportConfig(server) {
  server.use(passport.initialize());
}
module.exports = passportConfig;
