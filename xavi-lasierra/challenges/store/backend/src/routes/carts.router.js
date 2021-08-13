const express = require('express');
const {
  getCarts,
  createCart,
  findCartById,
  getCartById,
  deleteCartById
} = require('../controllers/carts.controller');

const cartsRouter = express.Router();

cartsRouter
  .route('/')
  .get(getCarts)
  .post(createCart);

cartsRouter
  .route('/:cartId')
  .all(findCartById)
  .get(getCartById)
  .delete(deleteCartById);

module.exports = cartsRouter;
