const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/random/nonAlcoholic')
  .get(beersController.getRandomNonAlcoholicBeer);

beersRouter
  .route('/random')
  .get(beersController.getRandomBeer);

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer)
  .put(beersController.updateBeer)
  .delete(beersController.deleteOneBeer);

module.exports = beersRouter;
