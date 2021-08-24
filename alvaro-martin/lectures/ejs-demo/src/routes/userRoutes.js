const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(userController.createOneUser)
  .get(userController.getAllUsers);

module.exports = userRouter;
