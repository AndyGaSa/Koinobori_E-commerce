const { Router } = require('express');
const {
  createTask,
  deleteTaskById,
  getAllTasks
} = require('../controllers/taskControllers');

const taskRouter = new Router();

taskRouter
  .route('/')
  .get(getAllTasks)
  .post(createTask);

taskRouter
  .route('/:taskId')
  .delete(deleteTaskById);

module.exports = taskRouter;
