const express = require('express');
const usersControllers = require('../controllers/usersControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(usersControllers.getUsers)
  .post(usersControllers.postUser);

module.exports = userRouter;
