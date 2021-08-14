const express = require('express');
const productController = require('../controllers/sitesController');

const productRouter = express.Router();

productRouter
  .route('/')
  .all(productController.findProduct)
  .get(productController.getProduct)
  .post(productController.createProduct)
  .delete(productController.deleteProduct);

module.exports = productRouter;
