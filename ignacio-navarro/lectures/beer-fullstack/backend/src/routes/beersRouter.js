const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/all')
  .get(beersController.getBeers);
beersRouter
  .route('/')
  .post(beersController.postBeer)
  .get(beersController.filterBeer);

beersRouter
  .route('/:beerId')
  .get(beersController.getOneBeer)
  .delete(beersController.deleteBeer);

module.exports = beersRouter;
