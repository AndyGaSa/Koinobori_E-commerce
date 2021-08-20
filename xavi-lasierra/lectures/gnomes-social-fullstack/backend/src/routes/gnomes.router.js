const { Router } = require('express');
const {
  getGnomes,
  createGnome,
  getGnomeById,
  deleteGnomeById,
  updateGnomeById
} = require('../controllers/gnomes.controller');

const gnomesRouter = Router();

gnomesRouter
  .route('/')
  .get(getGnomes)
  .post(createGnome);

gnomesRouter
  .route('/:gnomeId')
  .get(getGnomeById)
  .delete(deleteGnomeById)
  .put(updateGnomeById);

module.exports = gnomesRouter;
