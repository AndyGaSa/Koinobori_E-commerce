const express = require('express');
const cartController = require('../controllers/cartController');

const CartsRouter = express.Router();
CartsRouter
  .route('/')
  .get(cartController.getCarts)
  .post(cartController.postCart);

module.exports = CartsRouter;
