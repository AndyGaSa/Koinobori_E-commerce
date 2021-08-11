const express = require('express');
const toDoController = require('../controllers/toDoController');

const toDoRouter = express.Router();

toDoRouter
  .route('/')
  .get(toDoController.getToDos)
  .post(toDoController.setToDo);
toDoRouter
  .route('/:toDoId')
  .get(toDoController.getOneToDo);
module.exports = toDoRouter;
