const { Router } = require('express');
const {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const taskRouter = new Router();

taskRouter
  .route('/')
  .get(getAllTask)
  .post(createTask);

taskRouter
  .route('/:taskId')
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = taskRouter;
