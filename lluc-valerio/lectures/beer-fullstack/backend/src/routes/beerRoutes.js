// imports
const express = require('express');
const controller = require('../controllers/beersControllers');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get(controller.getBeers)
  .post(controller.setBeer);
beersRouter
  .route('/:beerId')
  .get(controller.getOneBeer)
  .put(controller.updateBeer)
  .delete(controller.deleteBeer);

module.exports = beersRouter;
