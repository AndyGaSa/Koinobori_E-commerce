const express = require('express');
const taskController = require('../controllers/taskController');

const taskRoutes = express.Router();

taskRoutes
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.postTask);

taskRoutes
  .route('/:TaskId')
  .put(taskController.putOneTask)
  .delete(taskController.deleteTask);

module.exports = taskRoutes;
