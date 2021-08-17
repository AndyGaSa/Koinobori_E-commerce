const { Router } = require('express');
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/gnomesController');

const gnomesRouter = Router();

gnomesRouter
  .route('/gnomes')
  .get(getAll)
  .post(createOne);

gnomesRouter
  .route('/gnomes/:gnomeId')
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);

module.exports = gnomesRouter;
