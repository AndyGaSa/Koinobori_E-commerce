const express = require('express');

const cartRouter = express.Router();

cartRouter
  .route('/');

module.exports = cartRouter;
