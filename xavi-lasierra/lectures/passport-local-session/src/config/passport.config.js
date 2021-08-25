const session = require('express-session');
const passport = require('passport');
const User = require('../models/user.model');

function passportConfig(server) {
  server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    try {
      const user = await User.findOne({ email });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

module.exports = passportConfig;
