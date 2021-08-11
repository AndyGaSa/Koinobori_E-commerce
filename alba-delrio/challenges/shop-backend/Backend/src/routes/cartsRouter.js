const express = require('express');
const cartController = require('../controllers/cartsController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .all(cartController.findOneCart)
  .get(cartController.getCart)
  .post(cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = cartRouter;
