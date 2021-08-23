const { Router } = require('express');
const {
  getAll,
  findOneCart,
  createOne,
  getOneCartById,
  deleteOneById,
} = require('../controllers/cartController');

const cartRouter = new Router();

cartRouter
  .route('/cart')
  .get(getAll)
  .post(createOne);
cartRouter
  .route('/cart/:cartId')
  .all(findOneCart)
  .get(getOneCartById)
  .delete(deleteOneById);

module.exports = cartRouter;
