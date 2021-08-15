const express = require('express');
const cartController = require('../controllers/cartsController');

const cartRouter = express.Router();

cartRouter
  .route('/new/:userId')
  .post(cartController.createCart);
cartRouter
  .route('/')
  .get(cartController.getCarts);
cartRouter
  .route('/:cartId')
  .all(cartController.findOneCart)
  .get(cartController.getOneCart);

module.exports = cartRouter;
