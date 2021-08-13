const { Router } = require('express');
const carritoController = require('../controllers/carritoControllers');

const carritoRouter = new Router();

carritoRouter
  .route('/')
  .get(carritoController.getCarritos)
  .post(carritoController.createCarrito);

carritoRouter
  .route('/:carritoId')
  .put(carritoController.putCarrito);

module.exports = carritoRouter;
