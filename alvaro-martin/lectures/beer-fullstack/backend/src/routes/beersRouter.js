const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/:beerId')
  .get(beersController.getOneBeer);

beersRouter
  .route('/:beerName')
  .get(beersController.filter);

module.exports = beersRouter;
