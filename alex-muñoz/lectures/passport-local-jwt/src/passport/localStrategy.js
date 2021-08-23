const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/user');

passport.use(
  'signup',
  new localStrategy.Strategy(
    {
      usernameField: 'name',
      passwordField: 'password'
    },
    async (name, password, next) => {
      try {
        const user = await User.create({ name, password });
        next(null, user);
      } catch (error) {
        next(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'name',
      passwordField: 'password'
    },
    async (name, password, next) => {
      try {
        const user = await User.findOne({ name });

        if (!user) {
          return next(null, false, { message: 'User not found' });
        }
        if (!user.isValidPassword(password)) {
          return next(null, false, { message: 'Wrong password' });
        }
        return next(null, user, { message: 'Logged in successful' });
      } catch (error) {
        return next(null, false);
      }
    }
  )
);
