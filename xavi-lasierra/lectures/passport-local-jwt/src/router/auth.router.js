const { Router } = require('express');
const passport = require('passport');
const User = require('../models/gnome.model');

const authRouter = Router();

authRouter
  .post(
    '/api/register',
    passport.authenticate('signup'),
    ({ user }, res) => {
      res.json({
        user,
        message: 'Registered'
      });
    }
  );

authRouter
  .post(
    '/api/login',
    passport.authenticate('login'),
    ({ user }, res) => {
      res.json({
        user,
        message: 'Logged'
      });
    }
  );

authRouter
  .get(
    '/api/users/:userId',
    (req, res, next) => {
      if (req.user) {
        next();
      } else {
        res.status(401);
        res.send();
      }
    },
    async ({ params: { userId } }, res) => {
      try {
        const user = await User.findById(userId);

        res.json({
          user,
          message: 'Profile'
        });
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    }
  );

module.exports = authRouter;
