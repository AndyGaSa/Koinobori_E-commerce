const express = require('express');
const {
  getCarts,
  createUpdateCart,
  findCartById,
  getCartById,
  deleteCartById
} = require('../controllers/carts.controller');

const cartsRouter = express.Router();

cartsRouter
  .route('/')
  .get(getCarts)
  .post(createUpdateCart);

cartsRouter
  .route('/:cartId')
  .all(findCartById)
  .get(getCartById)
  .delete(deleteCartById);

module.exports = cartsRouter;
