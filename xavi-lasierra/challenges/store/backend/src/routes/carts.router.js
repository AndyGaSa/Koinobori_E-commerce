const express = require('express');
const {
  getCarts,
  createCart,
  getCartById,
  updateCartById,
  deleteCartById
} = require('../controllers/carts.controller');

const cartsRouter = express.Router();

cartsRouter
  .route('/')
  .get(getCarts)
  .post(createCart);

cartsRouter
  .route('/:cartId')
  .get(getCartById)
  .put(updateCartById)
  .delete(deleteCartById);

module.exports = cartsRouter;
