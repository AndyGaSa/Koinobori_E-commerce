const { Router } = require('express');
const gnomeController = require('../controllers/gnomeController');

const gnomeRouter = new Router();

gnomeRouter
  .route('/')
  .post(gnomeController.createOne)
  .get(gnomeController.getAll);

gnomeRouter
  .route('/:gnomeId')
  .get(gnomeController.getOne)
  .put(gnomeController.updateOne)
  .delete(gnomeController.deleteOne);
module.exports = gnomeRouter;
