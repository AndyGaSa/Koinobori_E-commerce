const express = require('express');
const controller = require('../controllers/user');

const userRouter = express.Router();

userRouter
  .route('/:userId')
  .get(controller.getOne);

userRouter
  .route('/')
  .post(controller.createOne);

module.exports = userRouter;
