const express = require('express');
const toDoController = require('../controllers/toDoController');

const toDoRouter = express.Router(); // No lo entiendo.

toDoRouter
  .route('/')
  .get(toDoController.getToDos) // Read
  .post(toDoController.postToDo); // Create

module.exports = toDoRouter;
