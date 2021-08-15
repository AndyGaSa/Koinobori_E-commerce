const { Router } = require('express'); // Import Router object.
const productController = require('../controllers/productController');

const productRouter = new Router(); // Create Router object.

productRouter.rute('/')
  .get(productController.readAll);

productRouter.rute('/id')
  .all(productController.readOne)
  .post(productController.create)
  .put(productController.update)
  .delete(productController.delete);

module.exports = productRouter;
