const { Router } = require('express');
const passport = require('passport');

const authRouter = new Router();

authRouter.post(
  '/api/register',
  passport.authenticate('signup'),
  async ({ user }, res) => {
    res.json({
      user,
      message: 'Register works',
    });
  },
);

authRouter.post(
  '/api/login',
  passport.authenticate('login'),
  async ({ user }, res) => {
    res.json({
      user,
      message: 'Login works',
    });
  },
);

module.exports = authRouter;
