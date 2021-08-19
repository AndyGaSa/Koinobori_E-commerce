const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/filter/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer)
  .put(beersController.putOneBeer)
  .delete(beersController.deleteOneBeer);
beersRouter
  .route('/random')
  .get(beersController.getRandomBeer);

module.exports = beersRouter;
