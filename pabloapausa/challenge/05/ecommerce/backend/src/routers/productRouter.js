const { Router } = require('express'); // Import Router object.
const productController = require('../controllers/productController');

const productRouter = new Router(); // Create Router object.

productRouter.route('/')
  .get(productController.readAllProducts)
  .post(productController.createOneProduct);

module.exports = productRouter;
