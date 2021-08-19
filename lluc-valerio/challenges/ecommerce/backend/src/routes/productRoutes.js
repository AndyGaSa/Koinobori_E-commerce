// imports
const express = require('express');
const controller = require('../controllers/productControllers');

const productRouter = express.Router();

productRouter
  .route('/')
  .get(controller.getProducts)
  .post(controller.setProduct);
productRouter
  .route('/:productId')
  .get(controller.getProductById)
  .put(controller.updateProduct)
  .delete(controller.deleteProduct);

module.exports = productRouter;
