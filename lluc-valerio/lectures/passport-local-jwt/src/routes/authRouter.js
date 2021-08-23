const { Router } = require('express');
const passport = require('passport');

const authRouter = new Router();

const User = require('../models/userModel');

authRouter.get(
  '/api/users/:userId',
  passport.authenticate('login'),
  async (req, res) => {
    try {
      const userLogged = await User.findById(req.params.userId);
      res.json({
        userLogged,
        message: 'Profile Works'
      });
    } catch (error) {
      res.send(error);
    }
  }
);

authRouter.post(
  '/api/register',
  passport.authenticate('signup'),
  async ({ user }, res) => {
    res.json({
      user,
      message: 'Register Works'
    });
  }
);

authRouter.post(
  '/api/login',
  passport.authenticate('login'),
  async ({ user }, res) => {
    res.json({
      user,
      message: 'Login OK'
    });
  }
);

module.exports = authRouter;
