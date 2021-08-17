const { Router } = require('express');
const {
  getAllProducts,
  createProduct
} = require('../controllers/products.controller');

const productsRouter = Router();

productsRouter
  .route('/')
  .get(getAllProducts)
  .post(createProduct);

module.exports = productsRouter;
