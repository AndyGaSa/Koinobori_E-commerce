const { Router } = require('express');
const { getUserById } = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getUserById);

module.exports = userRouter;
