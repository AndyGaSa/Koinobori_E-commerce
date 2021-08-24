const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authControllers');

const router = new Router();

// REGISTER
router.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  authController.registerFn
);

// LOGIN
router.post(
  '/login',
  async (req, res, done) => {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return done(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return done(error);

              // eslint-disable-next-line no-underscore-dangle
              const data = { _id: user._id, email: user.email };

              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                { expiresIn: '1m' }
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET
              );

              authController.refreshTokens.push(refreshToken);

              return res.json({
                token,
                refreshToken
              });
            }
          );
        } catch (error) {
          return done(error);
        }
      }
    )(req, res, done);
  }
);

// REFRESH TOKEN
router.post('/refreshToken', authController.refreshTokenFn);

// LOGOUT
router.post('/logout', authController.logoutFn);

module.exports = router;
