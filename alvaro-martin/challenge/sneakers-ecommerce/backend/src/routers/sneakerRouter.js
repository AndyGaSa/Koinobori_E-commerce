const { Router } = require('express');
const {
  createOne,
  getAll,
} = require('../controllers/sneakersController');

const sneakerRouter = new Router();

sneakerRouter
  .route('/')
  .post(createOne)
  .get(getAll);

module.exports = sneakerRouter;
