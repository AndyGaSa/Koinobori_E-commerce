const passport = require('passport');
const jwt = require('passport-jwt');

passport.use(
  new jwt.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) { return done(error); }
    },
  ),
);
