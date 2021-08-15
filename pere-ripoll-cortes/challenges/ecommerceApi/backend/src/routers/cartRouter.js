const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/cart')
  .post(cartController.createOneCart);

module.exports = cartRouter;
