const { Router } = require('express');

const mainRouter = new Router();
const { getIndex, get404 } = require('../controllers/mainController');

mainRouter
  .route('/')
  .get(getIndex);
mainRouter
  .route('*')
  .get(get404);
module.exports = mainRouter;
