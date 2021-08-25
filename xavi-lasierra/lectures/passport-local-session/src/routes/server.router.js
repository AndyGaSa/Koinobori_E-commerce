const { Router } = require('express');
const passport = require('passport');

const router = Router();

router
  .post('/register',
    passport.authenticate('signup', { session: false }),
    ({ user }, res) => {
      res.json({
        user,
        message: 'Register works'
      });
    });

router
  .post('/login',
    passport.authenticate('login'),
    ({ user }, res) => {
      res.json({
        user,
        message: 'Login works'
      });
    });

router
  .get('/protected',
    (req, res, done) => {
      if (req.user) {
        done();
      } else {
        res.status(401);
        res.send();
      }
    },
    ({ user }, res) => {
      res.json({
        user,
        message: 'Protected works'
      });
    });

router
  .get('/unprotected',
    (req, res) => {
      res.send('Unprotected works');
    });

module.exports = router;
