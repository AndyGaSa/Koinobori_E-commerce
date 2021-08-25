const express = require('express');
const rootController = require('../controllers/rootController');

const rootRouter = express.Router();

rootRouter
  .route('/')
  .get(rootController.getRootTemplate);

module.exports = rootRouter;
