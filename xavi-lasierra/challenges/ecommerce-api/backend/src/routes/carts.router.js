const { Router } = require('express');
const {
  getCarts,
  createCart,
  getOneCart,
  updateCartByUserId,
  payCart
} = require('../controllers/carts.controller');

const cartsRouter = Router();

cartsRouter
  .route('/pay/:userId')
  .put(payCart);

cartsRouter
  .route('/')
  .get(getCarts)
  .post(createCart);

cartsRouter
  .route('/:userId')
  .get(getOneCart)
  .put(updateCartByUserId);

module.exports = cartsRouter;
