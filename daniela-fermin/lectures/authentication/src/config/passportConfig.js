/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const session = require('express-session');
const User = require('../models/userModel');

function passportConfig(server) {
  server.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  }));
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser((user, next) => {
    next(null, user.email);
  });

  passport.deserializeUser(async (email, next) => {
    try {
      const user = await User.findOne({ email });
      next(null, user);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = passportConfig;
