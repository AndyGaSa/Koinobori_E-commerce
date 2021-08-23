const { Router } = require('express');
const mainController = require('../controllers/mainController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const logoutController = require('../controllers/logoutController');
const taskController = require('../controllers/taskController');

const userRouter = Router();

userRouter
  .route('/')
  .get(mainController.getMain)
  .post(loginController.login);

userRouter
  .route('/profile')
  .get(mainController.profile);

userRouter
  .route('/login')
  .post(registerController.registerValidation)
  .get(mainController.getMain);

userRouter
  .route('/register')
  .get(registerController.register);
// .post(registerController.registerValidation);

userRouter
  .route('/logout')
  .get(logoutController.logout);

userRouter
  .route('/addTask')
  .get(taskController.addTask)
  .post(taskController.setTask);

module.exports = userRouter;
