const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .all(cartController.findCart)
  .get(cartController.getCart)
  .delete(cartController.deleteCart);
cartRouter
  .route('/:productId')
  .post(cartController.createCart);

module.exports = cartRouter;
