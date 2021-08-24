const express = require('express');
const passport = require('passport');
const productController = require('../controllers/productController');

const ProductsRouter = express.Router();
ProductsRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .get(productController.getProducts)
  .post(productController.postProduct);

module.exports = ProductsRouter;
