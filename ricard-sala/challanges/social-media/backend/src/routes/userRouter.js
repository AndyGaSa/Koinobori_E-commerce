/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  updateOneFriendById,
  deleteOneById,
} = require('../controllers/userController');

const userRouter = new Router();

let refreshTokens = [];

userRouter.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  ({ user }, res) => {
    res.send({
      user,
      message: 'Register works',
    });
  },
);
userRouter.post(
  '/login',
  passport.authenticate('login', { session: false }),
  ({ user }, res) => {
    const data = { _id: user._id, email: user.email };
    try {
      const token = jwt.sign(
        { user: data },
        process.env.JWT_SECRET,
        { expiresIn: '5m' },
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

userRouter.get(
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
  .route('/')
  .post(createOne)
  .get(getAll);

userRouter
  .route('/:userId')
  // .all(passport.authenticate('login', { session: false }))
  .get(getOneById)
  .put(updateOneById)
  .patch(updateOneFriendById)
  .delete(deleteOneById);

module.exports = userRouter;
