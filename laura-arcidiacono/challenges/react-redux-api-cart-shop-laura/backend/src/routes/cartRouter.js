const { Router } = require('express');
const {
  getAll, createOne, getById, updateOneById, deleteOneById
} = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAll)
  .post(createOne);

cartRouter
  .route('/:carts')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = cartRouter;
