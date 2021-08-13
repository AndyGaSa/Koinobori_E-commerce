const { Router } = require('express');
const {
  getProducts, postProduct, findOneProduct, getOneProduct, putOneProduct, deleteOneProduct,
} = require('../controllers/productsController');

const productsRouter = new Router();

productsRouter
  .route('/products')
  .get(getProducts)
  .post(postProduct);
productsRouter
  .route('/products/:productId')
  .all(findOneProduct)
  .get(getOneProduct)
  .put(putOneProduct)
  .delete(deleteOneProduct);

module.exports = productsRouter;
