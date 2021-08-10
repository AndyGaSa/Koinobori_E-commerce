const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/random')
  .get(beersController.getRandom);

beersRouter
  .route('/randomsenalcohol')
  .get(beersController.getRandomSenAlcohol);

beersRouter
  .route('/beers/:beer_name')
  .get(beersController.getByName);

beersRouter
  .route('/beers')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

module.exports = beersRouter;
