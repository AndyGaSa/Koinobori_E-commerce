const { Router } = require('express');
const {
  createTask,
  deleteTaskById,
  getAllTasks,
  updateTaskById
} = require('../controllers/taskControllers');

const taskRouter = new Router();

taskRouter
  .route('/')
  .get(getAllTasks)
  .post(createTask);

taskRouter
  .route('/:taskId')
  .delete(deleteTaskById)
  .put(updateTaskById);

module.exports = taskRouter;
