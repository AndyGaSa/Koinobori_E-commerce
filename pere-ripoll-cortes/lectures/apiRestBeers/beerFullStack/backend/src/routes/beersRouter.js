const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter.route('/params')
  .get(beersController.filterBeer);

beersRouter
  .route('/:beerId')
  .get(beersController.getOneBeer);

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer)
  .delete(beersController.deleteBeer)
  .put(beersController.putBeer);

module.exports = beersRouter;
