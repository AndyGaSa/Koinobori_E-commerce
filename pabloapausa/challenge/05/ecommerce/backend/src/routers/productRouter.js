const { Router } = require('express'); // Import Router object.
const productController = require('../controllers/productController');

const productRouter = new Router(); // Create Router object.

productRouter.route('/')
  .get(productController.readAllProducts)
  .post(productController.createOneProduct);

productRouter.route(':/productId')
  .all(productController.searchOneProduct)
  .get(productController.readOneProduct)
  .put(productController.updateOneProduct)
  .delete(productController.deleteOneProduct);

module.exports = productRouter;
