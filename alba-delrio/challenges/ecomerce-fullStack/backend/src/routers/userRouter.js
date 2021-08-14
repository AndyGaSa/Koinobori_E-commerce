const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/')
  .post(userController.createUser);
userRouter
  .route('/:user')
  .delete(userController.deleteUser);

module.exports = userRouter;
