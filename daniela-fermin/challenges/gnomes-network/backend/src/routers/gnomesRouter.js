/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/gnomesController');

const gnomesRouter = Router();

let refreshTokens = [];

gnomesRouter.post(
  '/register',
  passport.authenticate('register', { session: false }),
  ({ user }, res) => {
    res.send({
      user,
      message: 'Register works'
    });
  }
);

gnomesRouter.post(
  '/login',
  passport.authenticate('login', { session: false }),
  ({ user }, res) => {
    const data = { _id: user._id, email: user.email };
    try {
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
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  }
);

gnomesRouter.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  ({ user }, res) => res.json({
    user,
    message: 'Protected works'
  })
);

gnomesRouter.get(
  '/unprotected',
  ({ user }, res) => res.send({
    user,
    message: 'Unprotected works'
  })
);

gnomesRouter.post(
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
        { expiresIn: '1m' }
      );

      return res.json({
        token
      });
    });
  }
);

gnomesRouter.post(
  '/logout',
  ({ body: { refreshToken } }, res) => {
    refreshTokens = refreshTokens.filter((current) => current !== refreshToken);
    res.send('Logout successful');
  }
);
gnomesRouter
  .route('/gnomes/:gnomeId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
gnomesRouter
  .route('/gnomes')
  .get(getAll)
  .post(createOne);

module.exports = gnomesRouter;
