const { Router } = require('express'); // Import Router object.
const cartController = require('../controllers/cartController');

const cartRouter = new Router(); // Create Router object.

cartRouter.rute('/')
  .get(cartController.readAll);

cartRouter.rute('/:id')
  .all(cartController.readOne)
  .post(cartController.createOne)
  .put(cartController.updateOne)
  .delete(cartController.deleteOne);

module.exports = cartRouter;
