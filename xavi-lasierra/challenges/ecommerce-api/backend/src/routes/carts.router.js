const { Router } = require('express');
const {
  getCarts,
  createCart,
  getOneCart
} = require('../controllers/carts.controller');

const cartsRouter = Router();

cartsRouter
  .route('/')
  .get(getCarts)
  .post(createCart);

cartsRouter
  .route('/:userId')
  .get(getOneCart);

module.exports = cartsRouter;
