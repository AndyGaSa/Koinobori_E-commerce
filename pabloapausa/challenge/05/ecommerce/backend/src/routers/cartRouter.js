const { Router } = require('express'); // Import Router object.
const cartController = require('../controllers/cartController');

const cartRouter = new Router(); // Create Router object.

cartRouter.route('/')
  .all(cartController.readAllCarts)
  .post(cartController.createOneCart);

cartRouter.route('/:cartId')
  .get(cartController.readOneCart)
  .put(cartController.updateOneCart);

module.exports = cartRouter;
