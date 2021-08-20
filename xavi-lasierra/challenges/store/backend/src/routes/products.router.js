const express = require('express');
const {
  getProducts,
  createProduct,
  findOneProductById,
  getOneProductById,
  updateOneProductById,
  deleteOneProductById
} = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get(getProducts)
  .post(createProduct);

productsRouter
  .route('/:productId')
  .all(findOneProductById)
  .get(getOneProductById)
  .put(updateOneProductById)
  .delete(deleteOneProductById);

module.exports = productsRouter;
