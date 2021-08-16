const { Router } = require('express'); // Import Router object.
const cartController = require('../controllers/cartController');

const cartRouter = new Router(); // Create Router object.

cartRouter.route('/')
  .all(cartController.readAllcarts)
  .post(cartController.createOnecart);

cartRouter.route('/:id')
  .all(cartController.searchOnecart)
  .get(cartController.readOnecart)
  .put(cartController.updateOnecart)
  .delete(cartController.deleteOnecart);

module.exports = cartRouter;
