const passport = require('passport');
const session = require('express-session');
const User = require('../models/userModel');

function passportConfig(server) {
  server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }));
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser((user, next) => {
    next(null, user.name);
  });

  passport.deserializeUser(async (name, next) => {
    try {
      const user = await User.findOne({ name });
      next(null, user);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = passportConfig;
