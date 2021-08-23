const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/userModel');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const users = await User.find({ email });
        if (users.length > 0) {
          throw new Error('User already registered');
        }

        const user = await User.create({ email, password });
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          done(null, false, { message: 'User not registered' });
        }

        if (!user.isValidPassword(password)) {
          done(null, false, { message: 'Invalid password' });
        }

        done(null, user);
      } catch ({ message }) {
        done(null, false, { message });
      }
    }
  )
);
