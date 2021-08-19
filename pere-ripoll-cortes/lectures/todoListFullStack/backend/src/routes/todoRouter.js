const express = require('express');
const todoController = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter
  .route('/list')
  .get(todoController.getTasks)
  .post(todoController.postTask);
todoRouter
  .route('/list/:toDoId')
  .all(todoController.findOneTask)
  .get(todoController.getOneTask)
  .put(todoController.putOneTask)
  .delete(todoController.deleteOneTask);

module.exports = todoRouter;
