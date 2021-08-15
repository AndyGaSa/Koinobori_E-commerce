const { Router } = require('express');

const productRouter = new Router();
const productsController = require('../controllers/productController');

productRouter
  .route('/')
  .post(productsController.createOneProduct);

module.exports = productRouter;
