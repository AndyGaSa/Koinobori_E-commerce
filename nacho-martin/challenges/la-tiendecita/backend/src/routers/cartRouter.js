const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();
cartRouter
  .route('/')
  .get(cartController.getAll)
  .post(cartController.createOne)
  .put(cartController.updateCart);

module.exports = cartRouter;
