const { Router } = require('express');

const router = Router();

router
  .route('/')
  .get((req, res) => {
    res.render('index');
  });

router
  .route('/profile')
  .get((req, res) => {
    const userData = {
      name: 'Laura',
      age: 38
    };
    res.render('profile', { user: userData });
  });

module.exports = router;
