const express = require('express');
const beerController = require('../controllers/beersController');

const beerRoute = express.Router();

beerRoute
  .route('/:beerId')
  .all(beerController.findOneBeer)
  .delete(beerController.deleteOneBeer)
  .put(beerController.putOneBeer);

beerRoute
  .route('/')
  .get(beerController.getBeers)
  .post(beerController.postBeer);

module.exports = beerRoute;
