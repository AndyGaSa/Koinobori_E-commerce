// imports
const express = require('express');
const controller = require('../controllers/cartControllers');

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(controller.getAllCarts)
  .post(controller.setCart);
cartRouter
  .route('/:beerId');

module.exports = cartRouter;
