const express = require('express');

const todosController = require('../controllers/todosController');

const todosRouter = express.Router();

todosRouter
  .route('/')
  .post(todosController.postTodo)
  .get(todosController.getTodos);

todosRouter
  .route('/delete/:todoId')
  .get(todosController.deleteTodo);

todosRouter
  .route('/update/:todoId')
  .get(todosController.updateTodo);

todosRouter
  .route('/filter/done')
  .get(todosController.filterByDoneTodos);

module.exports = todosRouter;
