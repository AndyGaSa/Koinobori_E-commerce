const { Router } = require('express');
const {
  getAllBeers,
  createOneBeer,
  getOneBeerById,
  updateOneBeerById,
  deleteOneBeerById
} = require('../controllers/beersController');

const beersRouter = new Router();

beersRouter
  .route('/')
  .get(getAllBeers)
  .post(createOneBeer);

beersRouter
  .route('/:beerId')
  .get(getOneBeerById)
  .put(updateOneBeerById)
  .delete(deleteOneBeerById);

module.exports = beersRouter;
