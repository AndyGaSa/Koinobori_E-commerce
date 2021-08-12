const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter
  .route('/inventory/products')
  .get(productsController.getProducts)
  .post(productsController.postProduct);
productsRouter
  .route('/inventory/products/:productId')
  .all(productsController.findOneProduct)
  .get(productsController.getOneProduct)
  .put(productsController.putOneProduct)
  .delete(productsController.deleteOneProduct);

module.exports = productsRouter;
