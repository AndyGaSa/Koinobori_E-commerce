const express = require('express');
const userController = require('../controllers/userController');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.postUser);

module.exports = usersRouter;
