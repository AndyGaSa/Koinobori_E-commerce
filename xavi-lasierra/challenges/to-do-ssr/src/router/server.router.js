const { Router } = require('express');
const {
  mainPage,
  restricted,
  addToDo
} = require('../controllers/server.controller');

const router = Router();

router
  .route('/toDo')
  .post(addToDo);

router
  .route('/restricted')
  .get(restricted);

router
  .route('/')
  .get(mainPage);

module.exports = router;
