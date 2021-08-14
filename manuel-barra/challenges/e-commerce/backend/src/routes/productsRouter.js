const express = require('express');
const productControllers = require('../controllers/productControllers');

const storeRouter = express.Router();

storeRouter
  .route('/products')
  .get(productControllers.getStore)
  .post(productControllers.postStore);

storeRouter
  .route('/store/:storeId')
  .delete(productControllers.deleteById)
  .put(productControllers.putById);

module.exports = storeRouter;
