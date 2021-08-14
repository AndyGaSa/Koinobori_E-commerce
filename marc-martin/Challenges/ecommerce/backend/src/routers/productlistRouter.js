const { Router } = require('express');

const {
  getAllProducts
} = require('../controllers/productListController');

const productListRouter = new Router();

productListRouter
  .route('/')
  .get(getAllProducts);

module.exports = productListRouter;
