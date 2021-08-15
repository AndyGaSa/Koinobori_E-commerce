const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(cartController.getCart);

cartRouter
  .route('/:cartId')
  .all(cartController.findOneCart)
  .get(cartController.getOneCart);

module.exports = cartRouter;
