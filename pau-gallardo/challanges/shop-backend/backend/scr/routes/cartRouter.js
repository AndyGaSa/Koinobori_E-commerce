const express = require('express');
const cartController = require('../controllers/cartController');

const cartsRouter = express.Router();

cartsRouter
  .route('/')
  .get(cartController.getCarts)
  .post(cartController.postCarts);

module.exports = cartsRouter;
