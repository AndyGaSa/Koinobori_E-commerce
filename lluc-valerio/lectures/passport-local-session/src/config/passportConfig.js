const session = require('express-session');
const passport = require('passport');
const User = require('../models/userModel');

require('./passportLocalStrategy');

function passportConfig(server) {
  server.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  }));
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.name);
  });

  passport.deserializeUser(async (name, done) => {
    try {
      const user = await User.findOne({ name });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

module.exports = passportConfig;
