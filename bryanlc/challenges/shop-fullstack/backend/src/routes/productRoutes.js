const { Router } = require('express');
const productsControllers = require('../controllers/productsControllers');

const productRouter = new Router();

productRouter
  .route('/')
  .get(productsControllers.getProducts)
  .post(productsControllers.createProducts);

productRouter
  .route('/:productId')
  .put(productsControllers.putProduct)
  .delete(productsControllers.deleteProduct);

module.exports = productRouter;
