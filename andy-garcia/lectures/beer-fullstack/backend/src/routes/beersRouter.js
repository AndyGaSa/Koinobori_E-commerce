const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/beers/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/beers/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer)
  .delete(beersController.deleteOneBeer)
  .put(beersController.updateOneBeer);

beersRouter
  .route('/random')
  .get(beersController.findRandomBeer);

beersRouter
  .route('/random/nonAlcoholic')
  .get(beersController.findRandomNonAlcoholBeer);

module.exports = beersRouter;
