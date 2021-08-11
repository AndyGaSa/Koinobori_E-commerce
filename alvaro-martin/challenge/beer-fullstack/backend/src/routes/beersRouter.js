const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();
beersRouter
.route('/random')
.get(beersController.getRandomBeer)

beersRouter
.route('/randomNonAlco')
.get(beersController.getRandomNonAlcoBeer)

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer)
  .put(beersController.putOneBeer)
  .delete(beersController.deleteOneBeer);

module.exports = beersRouter;
