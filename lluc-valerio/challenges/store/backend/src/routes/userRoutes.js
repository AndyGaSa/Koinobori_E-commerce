// imports
const express = require('express');
const controller = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(controller.getUsers)
  .post(controller.setUser);
userRouter
  .route('/:userId')
  .get(controller.getUserById)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

module.exports = userRouter;
