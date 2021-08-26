/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const authRouter = new Router();

let refreshTokens = [];

authRouter
  .post('/register',
    passport.authenticate('signup', { session: false }),
    ({ user }, res) => {
      res.json({
        user,
        message: 'Register done'
      });
    });

authRouter
  .post('/login',
    passport.authenticate('login', { session: false }),
    ({ user }, res) => {
      try {
        const data = {
          _id: user._id,
          email: user.email
        };

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

        res.json({
          token,
          refreshToken
        });
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    });

authRouter
  .post('/refreshToken',
    ({ body: { refreshToken } }, res) => {
      if (!refreshToken) {
        return res.sendStatus(401);
      }

      if (!refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
      }

      return jwt.verify(
        refreshToken,
        process.env.JWT_SECRET,
        (err, { user }) => {
          if (err) {
            return res.sendStatus(403);
          }

          const data = {
            _id: user._id,
            email: user.email
          };

          const token = jwt.sign(
            { user: data },
            process.env.JWT_SECRET,
            { expiresIn: '1m' }
          );

          return res.json({
            token
          });
        }
      );
    });

authRouter
  .post(
    '/logout',
    ({ body: { refreshToken } }, res) => {
      refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

      res.send('Logout successful');
    }
  );

module.exports = authRouter;
