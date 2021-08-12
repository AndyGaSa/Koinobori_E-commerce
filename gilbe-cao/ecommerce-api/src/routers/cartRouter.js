const { Router } = require('express');
const {
  getAll,
  createOne,
  getOneById,
} = require('../controllers/cartController');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAll)
  .post(createOne);

cartRouter
  .route('/:cartId')
  .get(getOneById);

module.exports = cartRouter;
