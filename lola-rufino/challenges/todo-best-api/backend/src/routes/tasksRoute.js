const express = require('express');
const taskController = require('../controllers/tasksControllers');

const taskRouter = express.Router();

taskRouter
  .route('/task')
  .get(taskController.getTasks)
  .post(taskController.postTask);

taskRouter
  .route('/task/:taskId')
  .delete(taskController.deleteById)
  .put(taskController.putById);

module.exports = taskRouter;
