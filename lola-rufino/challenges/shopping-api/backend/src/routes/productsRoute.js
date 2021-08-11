const express = require('express');
const productsController = require('../controllers/productsControllers');

const productsRouter = express.Router();

productsRouter
  .route('/products')
  .get(productsController.getProducts)
  .post(productsController.postProducts);

productsRouter
  .route('/products/:productsId')
  .delete(productsController.deleteProduct)
  .put(productsController.updateProduct);

module.exports = productsRouter;
