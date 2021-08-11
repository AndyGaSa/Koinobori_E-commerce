const express = require('express');
const toDosController = require('../controllers/toDosController');

const toDosRouter = express.Router();

toDosRouter
  .route('/')
  .get(toDosController.getToDos)
  .post(toDosController.postToDo);

toDosRouter
  .route('/:toDoId')
  .all(toDosController.findOneToDo)
  .get(toDosController.getOneToDo)
  .delete(toDosController.deleteOneToDo)
  .put(toDosController.putOneToDo);

module.exports = toDosRouter;
