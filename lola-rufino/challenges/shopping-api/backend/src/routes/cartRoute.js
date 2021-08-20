const { Router } = require('express');
const {
  getCarts,
  postCart,
  getCart,
  findCartAndUpdate,
  deleteCart
} = require('../controllers/cartControllers');

const cartsRouter = new Router();

cartsRouter
  .route('/')
  .get(getCarts)
  .post(postCart);

cartsRouter
  .route('/:cartId')
  .get(getCart)
  .post(findCartAndUpdate)
  .delete(deleteCart);

module.exports = cartsRouter;
