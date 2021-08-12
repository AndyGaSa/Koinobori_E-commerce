const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(cartController.getCart)
  .post(cartController.createCart);

cartRouter
  .route('/:_id')
  .all(cartController.findCart)
  .delete(cartController.deleteCart);
module.exports = cartRouter;
