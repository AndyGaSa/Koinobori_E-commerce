const { Router } = require('express');
const {
  getAll, createOne, getById, updateOneById, deleteOneById
} = require('../controllers/productControllers');

const productRouter = new Router();

productRouter
  .route('/')
  .get(getAll)
  .post(createOne);

productRouter
  .route('/:products')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = productRouter;
