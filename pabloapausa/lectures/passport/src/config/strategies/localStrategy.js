const passport = require('passport');
const local = require('passport-local');
const User = require('../../models/userModel');

passport.use(
  'signup',
  new local.Strategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await User.create({ email, password });
        return done(null, user);
      } catch (error) { return done(error); }
    },
  ),
);

passport.use(
  'login',
  new local.Strategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, {
            message: 'User not found',
          });
        }
        if (!user.isValidPassword(password)) {
          return done(null, false, {
            message: 'Wrong Password',
          });
        }
        return done(null, user, {
          message: 'Logged in Successfully',
        });
      } catch (error) { return done(null, false); }
    },
  ),
);
