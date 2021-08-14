const { Router } = require('express');
const { createProduct } = require('../controllers/products.controller');

const productsRouter = Router();

productsRouter
  .route('/')
  .post(createProduct);

module.exports = productsRouter;
