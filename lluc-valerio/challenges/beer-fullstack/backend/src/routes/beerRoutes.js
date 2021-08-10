const express = require('express');

const beersRouter = express.Router();

beersRouter
  .route('/');
beersRouter
  .route('/beerId');

module.exports = beersRouter;
