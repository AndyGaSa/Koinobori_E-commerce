const express = require('express');
const controller = require('../controllers/beerControllers');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get(controller.getBeers)
  .post(controller.setBeers);
beersRouter
  .route('/:beerId')
  .get(controller.getOneBeerById);

module.exports = beersRouter;
