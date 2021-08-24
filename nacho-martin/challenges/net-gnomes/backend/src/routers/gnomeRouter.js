const { Router } = require('express');
const gnomeController = require('../controllers/gnomeController');

const gnomeRouter = new Router();

gnomeRouter
  .route('/:gnomeId')
  .get(gnomeController.getOne)
  .put(gnomeController.updateOne)
  .delete(gnomeController.deleteOne);

gnomeRouter
  .route('/')
  .post(gnomeController.createOne)
  .get(gnomeController.getAll);

module.exports = gnomeRouter;
