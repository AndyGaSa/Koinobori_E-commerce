const express = require('express');
const toDosController = require('../controllers/toDosController');

const toDosRouter = express.Router();

toDosRouter
  .route('/')
  .get(toDosController.getToDos);

module.exports = toDosRouter;
