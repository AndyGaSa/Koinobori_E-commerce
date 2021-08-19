const { Router } = require('express');
const {
  createOne,
  getAll,
} = require('../controllers/cartController');

const cartRouter = new Router();

cartRouter
  .route('/')
  .post(createOne)
  .get(getAll);

module.exports = cartRouter;
