const { Router } = require('express');
const usersController = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(usersController.postUser)
  .get(usersController.getAllUsers);

module.exports = userRouter;
