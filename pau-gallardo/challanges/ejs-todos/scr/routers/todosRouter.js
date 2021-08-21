const express = require('express');

const todosController = require('../controllers/todosController');

const todosRouter = express.Router();

todosRouter
  .route('/')
  .post(todosController.postTodo)
  .get(todosController.getTodos);

todosRouter
  .route('/:todoId')
  .get(todosController.getOneTodo)
  .delete(todosController.deleteTodo);

module.exports = todosRouter;
