const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/find')
  .get(beersController.findOneRandomBeer);

beersRouter
  .route('/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer)
  .put(beersController.putOneBeer)
  .delete(beersController.deleteOneBeer);

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

module.exports = beersRouter;
