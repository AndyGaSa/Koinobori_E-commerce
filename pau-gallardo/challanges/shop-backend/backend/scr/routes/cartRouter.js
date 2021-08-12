const express = require('express');
const cartController = require('../controllers/cartController');

const cartsRouter = express.Router();

cartsRouter
  .route('/')
  .get(cartController.getCarts)
  .post(cartController.postCarts)
  .delete(cartController.deleteOneCart);

cartsRouter
  .route('/:cartId')
  .delete(cartController.deleteOneCart);

module.exports = cartsRouter;
