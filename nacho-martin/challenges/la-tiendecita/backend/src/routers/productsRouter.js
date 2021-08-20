const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();
productsRouter
  .route('/')
  .get(productsController.getAll)
  .post(productsController.createOne);

module.exports = productsRouter;
