const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get(beersController.getBeers);

beersRouter
  .route('/:beerId')
  .all(beersController.findOneBeer)
  .get(beersController.getOneBeer);

module.exports = beersRouter;
