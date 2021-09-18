/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const usersController = require('../controllers/usersController');

const userRouter = new Router();

let refreshTokens = [];

userRouter
  .post(
    '/register',
    passport.authenticate('signup', { session: false }),
    ({ user }, res) => {
      res.send({
        user,
        message: 'Register works',
      });
    },
  );
userRouter
  .post(
    '/login',
    passport.authenticate('login', { session: false }),
    ({ user }, res) => {
      const data = { _id: user._id, email: user.email };
      try {
        const token = jwt.sign(
          { user: data },
          process.env.JWT_SECRET,
          { expiresIn: '1m' },
        );
        const refreshToken = jwt.sign(
          { user: data },
          process.env.JWT_SECRET,
        );

        refreshTokens.push(refreshToken);

        return res.json({
          token,
          refreshToken,
        });
      } catch (error) {
        res.status(500);
        return res.send(error);
      }
    },
  );
userRouter
  .post(
    '/refreshToken',
    ({ body: { refreshToken } }, res) => {
      if (!refreshToken) {
        return res.sendStatus(401);
      }

      if (!refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
      }

      return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
        if (err) {
          return res.sendStatus(403);
        }

        const data = { _id: user._id, email: user.email };

        const token = jwt.sign(
          { user: data },
          process.env.JWT_SECRET,
          { expiresIn: '1m' },
        );

        return res.json({
          token,
        });
      });
    },
  );
userRouter
  .get(
    '/protected',
    passport.authenticate('jwt', { session: false }),
    ({ user }, res) => res.json({
      user,
      message: 'Protected works',
    }),
  );
userRouter.post(
  '/logout',
  ({ body: { refreshToken } }, res) => {
    refreshTokens = refreshTokens.filter((current) => current !== refreshToken);
    res.send('Logout successful');
  },
);

userRouter
  .route('/adversaries')
  .get(usersController.getAdversaries);
userRouter
  .route('/friends')
  .get(usersController.getFriends);
userRouter
  .route('/adversaries/:params')
  .put(usersController.putAdversaries);
userRouter
  .route('/friends/:params')
  .put(usersController.putFriends);
userRouter
  .route('/adversaries')
  .get(usersController.getAdversaries);
userRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .post(usersController.postUser)
  .get(usersController.getAllUsers);
userRouter
  .route('/:userId')
  .get(usersController.getOneUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = userRouter;
