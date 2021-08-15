const { Router } = require('express');
const {
  getAll, getById, updateOneById, deleteOneById
} = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAll);

cartRouter
  .route('/:userCart')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = cartRouter;
