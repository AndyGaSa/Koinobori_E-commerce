const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .post(cartController.createCart);

module.exports = cartRouter;
