const { Router } = require('express');
const {
  getAllCarts,
  createOneCart,
  deleteOneCartById
} = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAllCarts)
  .post(createOneCart);

cartRouter
  .route('/:cartId')
  .delete(deleteOneCartById);

module.exports = cartRouter;
