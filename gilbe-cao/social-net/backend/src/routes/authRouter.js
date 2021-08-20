const { Router } = require('express');
const loginController = require('../controllers/loginController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(loginController.login);

module.exports = userRouter;
