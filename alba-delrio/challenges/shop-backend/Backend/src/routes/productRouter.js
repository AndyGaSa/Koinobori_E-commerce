const express = require('express');
const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter
  .route('/')

  .get(productController.getProducts)
  .post(productController.createProduct);

productRouter
  .route('/:product')
  .get(productController.getOneById)
  .put(productController.updateOneProduct)
  .delete(productController.deleteOneProduct);

module.exports = productRouter;
