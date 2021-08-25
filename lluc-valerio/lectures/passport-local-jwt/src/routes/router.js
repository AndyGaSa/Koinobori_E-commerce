const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = new Router();

let refreshTokens = [];

router.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  (req, res) => {
    res.send({
      user: req.user,
      message: 'Register works'
    });
  }
);

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

              refreshTokens.push(refreshToken);

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

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => res.json({
    user: req.user,
    message: 'Protected works'
  })
);

router.get(
  '/unprotected',
  (req, res) => res.send({
    user: req.user,
    message: 'Unprotected works'
  })
);

router.post('/refreshToken', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    // eslint-disable-next-line no-underscore-dangle
    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' }
    );

    return res.json({
      token
    });
  });
});

router.post('/logout', (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  res.send('Logout successful');
});

module.exports = router;
