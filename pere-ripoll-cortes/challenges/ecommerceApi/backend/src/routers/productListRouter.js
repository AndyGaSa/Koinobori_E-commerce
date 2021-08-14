const express = require('express');

const productListController = require('../controllers/productListController');

const productListRouter = express.Router();

productListRouter
  .route('/products')
  .post(productListController.createOne);

module.exports = productListRouter;
