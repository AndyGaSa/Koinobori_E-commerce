const { Router } = require('express');
const passport = require('passport');
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
  .all(passport.authenticate('jwt', { session: false }))
  .get(getCarts)
  .post(createCart);

cartsRouter
  .route('/:userId')
  .get(getOneCart)
  .put(updateCartByUserId);

module.exports = cartsRouter;
