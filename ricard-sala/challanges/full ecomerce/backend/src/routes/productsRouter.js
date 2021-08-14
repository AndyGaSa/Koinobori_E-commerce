const express = require('express');
const productsController = require('../controllers/productssController');

const prouductsRouter = express.Router();

prouductsRouter
  .route('/')
  .post(productsController.postProduct)
  .get(productsController.getAll);
prouductsRouter
  .route('/:productId')
  .put(productsController.updateOneById)
  .delete(productsController.deleteOneById)
  .get(productsController.getOneById);
module.exports = prouductsRouter;
