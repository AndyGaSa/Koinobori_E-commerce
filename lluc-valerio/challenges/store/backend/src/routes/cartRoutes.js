// imports
const express = require('express');
const controller = require('../controllers/cartControllers');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(controller.getCarts)
  .post(controller.setCart);
cartRouter
  .route('/:cartId')
  .get(controller.getCartById)
  .put(controller.addProductToCart)
  .post(controller.deleteProductFromCart)
  .delete(controller.deleteCart);

module.exports = cartRouter;
