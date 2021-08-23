const { Router } = require('express');
const {
  getAllProducts,
  createProduct,
  getRandomProduct
} = require('../controllers/products.controller');

const productsRouter = Router();

productsRouter
  .route('/random')
  .get(getRandomProduct);

productsRouter
  .route('/')
  .get(getAllProducts)
  .post(createProduct);

module.exports = productsRouter;
