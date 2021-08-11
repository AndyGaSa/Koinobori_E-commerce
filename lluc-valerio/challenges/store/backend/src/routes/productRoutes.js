// imports
const express = require('express');
const controller = require('../controllers/productControllers');

const productRouter = express.Router();

productRouter
  .route('/')
  .get(controller.getAllProducts)
  .post(controller.setProduct);
productRouter
  .route('/:beerId');

module.exports = productRouter;
