const express = require('express');
const userController = require('../controllers/userController');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .post(userController.createUser);

module.exports = usersRouter;
