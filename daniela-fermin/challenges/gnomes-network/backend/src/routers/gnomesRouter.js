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
  .route('/gnomes/:gnomeId')
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
gnomesRouter
  .route('/gnomes')
  .get(getAll)
  .post(createOne);

module.exports = gnomesRouter;
