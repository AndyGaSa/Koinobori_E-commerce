const { Router } = require('express');
const {
  getAllProducts,
  createOneProduct,
  getOneProductById,
  updateOneProductById,
  deleteOneProductById
} = require('../controllers/productsControllers');

const productsRouter = new Router();

productsRouter
  .route('/')
  .get(getAllProducts)
  .post(createOneProduct);

productsRouter
  .route('/:productId')
  .get(getOneProductById)
  .put(updateOneProductById)
  .delete(deleteOneProductById);

module.exports = productsRouter;
