const { Router } = require('express');
const {
  getAllCarts,
  createOneCart,
  getCartById,
  deleteCartById
} = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAllCarts)
  .post(createOneCart);

cartRouter
  .route('/:cartId')
  .get(getCartById)
  .delete(deleteCartById);

module.exports = cartRouter;
