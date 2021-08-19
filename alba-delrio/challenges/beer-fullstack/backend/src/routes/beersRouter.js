const express = require('express');
const beersController = require('../controllers/beersControllers');

const beersRouter = express.Router();

beersRouter
  .route('/beers/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/beers/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer)
  .put(beersController.updateOneBeer)
  .delete(beersController.deleteOneBeer);
beersRouter
  .route('/random')
  .get(beersController.findRandomBeer);
beersRouter
  .route('/random/nonAlcoholic')
  .get(beersController.findRandomNonAlcoholicBeer);
module.exports = beersRouter;
