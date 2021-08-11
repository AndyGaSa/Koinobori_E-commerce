const express = require('express');
const productController = require('../controllers/productController');

const ProductsRouter = express.Router();
ProductsRouter
  .route('/')
  .get(productController.getProducts)
  .post(productController.postProduct);

module.exports = ProductsRouter;
