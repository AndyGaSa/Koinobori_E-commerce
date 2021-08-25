const { Router } = require('express');
const passport = require('passport');

const router = new Router();

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
  passport.authenticate('login'),
  (req, res) => {
    res.send({
      user: req.user,
      message: 'Login works'
    });
  }
);

router.get(
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

router.get(
  '/unprotected',
  (req, res) => res.send({
    user: req.user,
    message: 'Unprotected works'
  })
);

module.exports = router;
