const express = require('express');
const randomController = require('../controllers/randomController');

const randomRouter = express.Router();

randomRouter
  .route('/random')
  .get(randomController.getRandom);

randomRouter
  .route('/randomsenalcohol')
  .get(randomController.getRandomSenAlcohol);

module.exports = randomRouter;
