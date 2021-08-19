const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(cartController.getCart);

cartRouter
  .route('/:_id/:quantity')
  .post(cartController.createCart);
cartRouter
  .route('/:_id')
  .all(cartController.findCart)
  .delete(cartController.deleteCart);

module.exports = cartRouter;
