const express = require('express');
const userControllers = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter
  .route('/:userId')
  .all(userControllers.findOneUser)
  .get(userControllers.getOneUser);

userRouter
  .route('/')
  .get(userControllers.getUser)
  .post(userControllers.postUser);

module.exports = userRouter;
