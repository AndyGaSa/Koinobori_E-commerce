const { Router } = require('express');
const {
  getAll,
  createOne
} = require('../controllers/cartsController');

const cartRouter = new Router();

cartRouter
  .route('/')
  .get(getAll)
  .post(createOne);

module.exports = cartRouter;
