const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/beers/:beerName')
  .get(beersController.getByName)
  .put(beersController.putBeer)
  .delete(beersController.deleteBeer);

beersRouter
  .route('/beers')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

module.exports = beersRouter;
