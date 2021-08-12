const express = require('express');
const {
  getProducts,
  postProduct,
  findOneProductById,
  getOneProductById,
  updateOneProductById,
  deleteOneProductById
} = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get(getProducts)
  .post(postProduct);

productsRouter
  .route('/:productId')
  .all(findOneProductById)
  .get(getOneProductById)
  .put(updateOneProductById)
  .delete(deleteOneProductById);

module.exports = productsRouter;
