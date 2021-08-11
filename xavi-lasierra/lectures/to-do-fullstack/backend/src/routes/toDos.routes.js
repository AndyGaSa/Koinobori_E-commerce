const express = require('express');
const toDosController = require('../controllers/toDosController');

const toDosRouter = express.Router();

toDosRouter
  .route('/')
  .get(toDosController.getToDos)
  .post(toDosController.postToDo);

toDosRouter
  .route('/:toDoId')
  .get(toDosController.getOneToDo);

module.exports = toDosRouter;
