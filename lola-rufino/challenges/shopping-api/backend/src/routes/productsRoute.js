const { Router } = require('express');
const {
  getProducts,
  postProducts,
  getProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/productsControllers');

const productsRouter = new Router();

productsRouter
  .route('/')
  .get(getProducts)
  .post(postProducts);

productsRouter
  .route('/:productId')
  .get(getProduct)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = productsRouter;
