const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/usersController');

const userRouter = new Router();

// Frontend routes

userRouter
  .route('/')
  .post(userController.createOneUser)
  .get(userController.getAllUsers);

userRouter
  .route('/:userId/')
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteOneById);

// Backend routes

let refreshTokens = [];

userRouter.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  async ({ user }, res) => {
    res.send({
      user,
      message: 'Register works'
    });
  }
);

userRouter.post(
  'api/users/login',
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

userRouter.get(
  'api/users/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => res.json({
    user: req.user,
    message: 'Protected works'
  })
);

userRouter.get(
  '/unprotected',
  (req, res) => res.send({
    user: req.user,
    message: 'Unprotected works'
  })
);

userRouter.post(
  'api/users/refreshToken', (req, res) => {
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
  }
);

userRouter.post('/logout', (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  res.send('Logout successful');
});

module.exports = userRouter;
