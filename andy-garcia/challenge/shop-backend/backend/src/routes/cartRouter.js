const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .all(cartController.findCart)
  .get(cartController.getCart)
  .post(cartController.createCart)
  .delete(cartController.deleteCart);

module.exports = cartRouter;
