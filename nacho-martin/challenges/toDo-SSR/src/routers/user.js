const express = require('express');
const controller = require('../controllers/user');

const userRouter = express.Router();
userRouter
  .route('/:userId')
  .get(controller.getOneById);

userRouter
  .route('/')
  .post(controller.logInOrSignUp);

module.exports = userRouter;
