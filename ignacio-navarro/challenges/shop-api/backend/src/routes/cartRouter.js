const express = require('express');

const cartController = require('../controllers/cartControllers');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(cartController.getCart)
  .post(cartController.postCart);
cartRouter
  .route('/:cartId')
  .post(cartController.postCart);

module.exports = cartRouter;
