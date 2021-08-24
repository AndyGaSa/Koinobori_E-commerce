const { Router } = require('express');
const taskController = require('../controllers/taskController');

const taskRouter = new Router();

taskRouter
  .route('/')
  .post(taskController.createOneTask)
  .get(taskController.getAllTasks)
  .delete(taskController.deleteOneTaskById);

module.exports = taskRouter;
