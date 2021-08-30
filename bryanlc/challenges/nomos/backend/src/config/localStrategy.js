const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/gnomo');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        /* const users = await User.find({ email });
        if (users.length > 0) {
          throw new Error('User already registered');
        }

        const user = await User.create({ email, password });
        done(null, user); */
        const user = await User.create({ email, password });

        return done(null, user);
      } catch (error) {
        return done(error);
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
          return done(null, false, { message: 'User not registered' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'wrong  password' });
        }

        return done(null, user, { message: 'Accer successfully' });
      } catch ({ message }) {
        return done(null, false, { message });
      }
    }
  )
);
