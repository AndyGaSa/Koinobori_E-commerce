const express = require('express');
const productsController = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get(productsController.getProducts)
  .post(productsController.postProduct);

productsRouter
  .route('/:productId')
  .all(productsController.findOneProduct)
  .get(productsController.getOneProduct);

module.exports = productsRouter;
