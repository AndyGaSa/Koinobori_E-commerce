const { Router } = require('express');

const {
  getAllProducts,
  createOneProduct
} = require('../controllers/productListController');

const productListRouter = new Router();

productListRouter
  .route('/')
  .get(getAllProducts)
  .post(createOneProduct);

module.exports = productListRouter;
