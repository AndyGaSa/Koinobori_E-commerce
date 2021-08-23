const { Router } = require('express');
const passport = require('passport');

const router = new Router();

router.post( // Sign up.
  '/register',
  passport.authenticate('signup', { session: false }),
  (req, res) => {
    res.json({ user: req.user, message: 'Sign up works.' });
  },
);

router.post( // Log in.
  '/login',
  passport.authenticate('login'),
  (req, res) => {
    res.send({ user: req.user, message: 'Log in works' });
  },
);

router.get( // Protected.
  '/protected',
  (req, res, next) => {
    if (req.user) return next();
    res.status(401);
    return res.send();
  },
  (req, res) => res.json({
    user: req.user,
    message: 'Protected is working',
  }),
);

router.get( // Unprotected.
  '/unprotected',
  (req, res) => res.send({
    user: req.user,
    message: 'Unprotected is working',
  }),
);

module.exports = router;
