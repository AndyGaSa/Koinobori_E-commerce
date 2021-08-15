const { Router } = require('express'); // Import Router object.
const cartController = require('../controllers/cartController');

const cartRouter = new Router(); // Create Router object.

cartRouter.route('/:id')
  .all(cartController.search)
  .get(cartController.readOne)
  .put(cartController.updateOne)
  .delete(cartController.deleteOne);

module.exports = cartRouter;
