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

module.exports = beersRouter;
