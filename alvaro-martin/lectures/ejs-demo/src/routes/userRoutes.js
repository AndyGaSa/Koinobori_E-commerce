const { Router } = require('express');
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(userController.createOneUser)
  .get(userController.getAllUsers);
userRouter
  .route('/task')
  .post(taskController.createOneTask)
  .get(taskController.getAllTasks)
  .delete(taskController.deleteOneTaskById);

module.exports = userRouter;
