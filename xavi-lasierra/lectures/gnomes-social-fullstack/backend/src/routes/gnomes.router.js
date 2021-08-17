const { Router } = require('express');
const {
  createGnome
} = require('../controllers/gnomes.controller');

const gnomesRouter = Router();

gnomesRouter
  .route('/')
  .post(createGnome);

module.exports = gnomesRouter;
