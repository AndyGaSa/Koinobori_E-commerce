const passport = require('passport');
const localStrategy = require('passport-local');
const Profile = require('../../models/profileModel');

passport.use(
  'signup',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const profile = await Profile.create({ email, password });

        return done(null, profile);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const profile = await Profile.findOne({ email });

        if (!profile) {
          return done(null, false, { message: 'User not found' });
        }
        if (!profile.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }
        return done(null, profile, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(null, false);
      }
    },
  ),
);
