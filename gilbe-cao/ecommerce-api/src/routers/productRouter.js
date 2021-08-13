const { Router } = require('express');
const {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
} = require('../controllers/productsController');

const productRouter = new Router();

productRouter
  .route('/')
  .get(getAll)
  .post(createOne);

productRouter
  .route('/:productId')
  .get(getOneById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = productRouter;
