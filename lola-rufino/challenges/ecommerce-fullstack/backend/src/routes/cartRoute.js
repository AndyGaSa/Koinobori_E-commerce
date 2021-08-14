const { Router } = require('express');
const { getAllCarts, createOneCart } = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAllCarts)
  .post(createOneCart);

module.exports = cartRouter;
