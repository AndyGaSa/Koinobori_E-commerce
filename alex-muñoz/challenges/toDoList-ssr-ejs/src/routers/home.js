const express = require('express');
const controller = require('../controllers/home');

const homeRouter = express.Router();

homeRouter
  .route('/')
  .get(controller);

module.exports = homeRouter;
