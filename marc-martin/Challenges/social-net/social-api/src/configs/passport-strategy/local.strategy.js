const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../../models/userModel');

passport.use(
  'signup', new Strategy(
    {
      usernameField: 'name',
      passwordField: 'password'
    },
    async (name, password, done) => {
      try {
        const user = User.create({ name, password });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login', new Strategy(
    {
      usernameField: 'name',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
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
    async (name, password, done) => {
      try {
        const user = await User.findOne({ name });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(null, false);
      }
    }
  )
);
