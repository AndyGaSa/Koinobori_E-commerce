const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get()
  .post(productsController.postProduct);

productsRouter
  .route('/:productId')
  .all()
  .get()
  .put()
  .delete();

module.exports = productsRouter;
