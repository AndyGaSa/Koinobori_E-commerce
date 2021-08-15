const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/:_id')
  .delete(cartController.deleteCart);

cartRouter
  .route('/:_id/:quantity')
  .get(cartController.createCart)
  .post(cartController.updateCart);
module.exports = cartRouter;
