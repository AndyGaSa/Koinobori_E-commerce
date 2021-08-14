const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/')
  .post(userController.createCart);

module.exports = userRouter;
