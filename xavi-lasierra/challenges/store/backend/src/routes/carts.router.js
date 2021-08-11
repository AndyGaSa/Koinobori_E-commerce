const express = require('express');
const cartsController = require('../controllers/carts.controller');

const cartsRouter = express.Router();

cartsRouter
  .route('/')
  .get(cartsController.getCarts)
  .post(cartsController.postCart);

module.exports = cartsRouter;
