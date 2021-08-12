const express = require('express');

const userController = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(userController.getUser)
  .post(userController.postUser);
userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .delete(userController.deleteUser)
  .put(userController.updateUser);
module.exports = userRouter;
