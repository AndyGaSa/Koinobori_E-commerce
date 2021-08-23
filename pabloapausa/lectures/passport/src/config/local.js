/* eslint-disable no-undef */
const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/userModel');

passport.use('signup', new Strategy({ // Sign up.
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, next) => {
  try {
    const users = await User.find({ email });
    if (users.length > 0) { throw new Error('User already registered'); }
    const user = await User.create({ email, password });
    next(null, user);
  } catch (error) { next(error); }
}));

passport.use('login', new Strategy({ // Log in.
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, next) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(null, false, { message: 'User not registered' });
    }
    if (!user.isValid(password)) {
      return next(null, false, { message: 'Invalid password' });
    }
    return next(null, user, { messsage: 'Success' });
  } catch (error) { return next(null, false, { message }); }
}));
