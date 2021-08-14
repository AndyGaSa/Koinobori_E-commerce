const { Router } = require('express');

const productRouter = new Router();

productRouter
  .route('/');

module.exports = productRouter;
