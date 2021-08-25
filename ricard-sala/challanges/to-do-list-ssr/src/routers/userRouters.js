const express = require('express');
const { createUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/users')
  .post(createUser);

module.exports = userRouter;
