const express = require('express');

const userController = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .post(userController.postUser);

module.exports = userRouter;
