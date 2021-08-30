/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = new Router();
const refreshTokens = [];

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
  passport.authenticate('login', { session: false }),
  ({ user }, res) => {
    /* res.send({
      user: req.user,
      message: 'Login works'
    }); */
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

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  ({ user }, res) => res.json({
    user,
    message: 'Protected works'
  })
);

router.get(
  '/unprotected',
  ({ user }, res) => res.send({
    user,
    message: 'Unprotected works'
  })
);

module.exports = router;
