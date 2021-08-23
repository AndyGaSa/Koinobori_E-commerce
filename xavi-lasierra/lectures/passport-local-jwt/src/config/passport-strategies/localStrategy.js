const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../../models/gnome.model');

passport.use(
  'signup',
  new Strategy(
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
  new Strategy(
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

        return next(null, user, { message: 'Logged in successfully' });
      } catch (error) {
        return next(null, false);
      }
    }
  )
);

module.exports = passport;
