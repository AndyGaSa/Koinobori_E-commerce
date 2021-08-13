const { Router } = require('express');
const {
  getAll,
  postOne,
  getOne,
  putOne,
  deleteOne,
} = require('../controllers/cartController');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAll)
  .post(postOne);

cartRouter
  .route('/cartId')
  .get(getOne)
  .put(putOne)
  .delete(deleteOne);

module.exports = cartRouter;
