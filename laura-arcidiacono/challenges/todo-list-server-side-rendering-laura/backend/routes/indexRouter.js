const { Router } = require('express');
const loadIndex = require('../actionCreators/actionCreators');

const indexRouter = new Router();

indexRouter
  .route('/')
  .get(loadIndex);

module.exports = indexRouter;
