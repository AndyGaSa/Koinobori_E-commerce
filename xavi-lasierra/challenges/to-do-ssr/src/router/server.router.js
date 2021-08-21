const { Router } = require('express');
const {
  mainPage,
  restricted
} = require('../controllers/server.controller');

const router = Router();

router
  .route('/toDo')
  .post(
    (req, res) => {
      console.log(req.body);
      res.redirect('/');
    }
  );

router
  .route('/restricted')
  .get(restricted);

router
  .route('/')
  .get(mainPage);

module.exports = router;
