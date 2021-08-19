const express = require('express');

const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter
  .route('/')
  .post(cartController.createOne);

cartRouter
  .route('/:cartId')
  .get(cartController.getOneById)
  .delete(cartController.deleteById)
  .put(cartController.updateById);
module.exports = cartRouter;
