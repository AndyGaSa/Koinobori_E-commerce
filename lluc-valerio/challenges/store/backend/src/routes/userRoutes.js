// imports
const express = require('express');
const controller = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(controller.getAllUsers)
  .post(controller.setUser);
userRouter
  .route('/:beerId');

module.exports = userRouter;
