const express = require('express');
const toDoController = require('../controllers/toDoController');

const toDoRouter = express.Router();

toDoRouter
  .route('/')
  .all(toDoController.searchToDo)
  .get(toDoController.getToDos)
  .post(toDoController.setToDo);
toDoRouter
  .route('/:toDoId')
  .get(toDoController.getOneToDo)
  .put(toDoController.updateOneToDo);
module.exports = toDoRouter;
