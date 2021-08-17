const { Router } = require('express');
const gnomeController = require('../controllers/gnomeController');

const gnomeRouter = new Router();

gnomeRouter
  .route('/')
  .post(gnomeController.createOne)
  .get(gnomeController.getAll);

module.exports = gnomeRouter;
