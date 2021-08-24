const passport = require('passport');
const JWTstrategy = require('passport-jwt');

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async ({ user }, done) => {
      try {
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
