const { Router } = require('express');
const { getCreateUser } = require('../controllers/users.controller');

const productsRouter = Router();

productsRouter
  .route('/')
  .post(getCreateUser);

module.exports = productsRouter;
