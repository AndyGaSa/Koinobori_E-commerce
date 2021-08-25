const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/userModel');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'name',
      passwordField: 'password'
    },
    async (name, password, done) => {
      try {
        const users = await User.find({ name });
        if (users.length > 0) {
          throw new Error('User already registered');
        }

        const user = await User.create({ name, password });
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
      usernameField: 'name',
      passwordField: 'password'
    },
    async (name, password, done) => {
      try {
        // eslint-disable-next-line no-debugger
        debugger;
        const user = await User.findOne({ name });

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
