const { Router } = require('express'); // Import Router object.
const productController = require('../controllers/productController');

const productRouter = new Router(); // Create Router object.

productRouter.route('/')
  .get(productController.readAllProducts);

productRouter.route(':/productId')
  .all(productController.searchProduct)
  .get(productController.readOneProduct)
  .put(productController.updateOneProduct)
  .delete(productController.deleteOneProduct);

module.exports = productRouter;
