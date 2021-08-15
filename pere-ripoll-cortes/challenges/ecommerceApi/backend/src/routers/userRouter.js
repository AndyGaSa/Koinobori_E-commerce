const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/users')
  .post(userController.createOne)
  .get(userController.getOneUser);

module.exports = userRouter;
