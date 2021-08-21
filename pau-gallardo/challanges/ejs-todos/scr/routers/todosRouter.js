const express = require('express');

const todosRouter = express.Router();

todosRouter
  .route('/');

module.exports = todosRouter;
