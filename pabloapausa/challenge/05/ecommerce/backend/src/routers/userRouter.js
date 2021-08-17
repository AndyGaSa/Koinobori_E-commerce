const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.route('/')
  .get(userController.readAllUsers)
  .post(userController.createOneUser);

module.exports = userRouter;
