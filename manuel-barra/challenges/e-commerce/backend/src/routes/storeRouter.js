const express = require('express');
const storeController = require('../controllers/storeControllers');

const storeRouter = express.Router();

storeRouter
  .route('/store')
  .get(storeController.getStore)
  .post(storeController.postStore);

storeRouter
  .route('/store/:storeId')
  .delete(storeController.deleteById)
  .put(storeController.putById);

module.exports = storeRouter;
