const { Router } = require('express');
const passport = require('passport');

const authRouter = new Router();

authRouter.post(
  '/register',
  passport.authenticate('register', { session: false }),
  (req, res) => {
    res.send({
      user: req.user,
      message: 'Register works'
    });
  }
);

authRouter.post(
  '/login',
  passport.authenticate('login'),
  (req, res) => {
    res.send({
      user: req.user,
      message: 'Login works'
    });
  }
);

authRouter.get(
  '/protected',
  (req, res, done) => {
    if (req.user) {
      done();
    } else {
      res.status(401);
      res.send();
    }
  },
  (req, res) => res.json({
    user: req.user,
    message: 'Protected works'
  })
);

authRouter.get(
  '/unprotected',
  (req, res) => res.send({
    user: req.user,
    message: 'Unprotected works'
  })
);

module.exports = authRouter;
