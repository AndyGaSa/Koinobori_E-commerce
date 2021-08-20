const { Router } = require('express');
const {
  mainPage
} = require('../controllers/server.controller');

const router = Router();

router
  .route('/')
  .get(mainPage);

router
  .route('/profile')
  .get((req, res) => {
    const userData = {
      name: 'Xavi',
      age: 23,
      boat: false
    };
    res.render('profile', { user: userData });
  });

module.exports = router;
