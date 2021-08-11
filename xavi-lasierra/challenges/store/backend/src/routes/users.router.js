const express = require('express');
const usersController = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .get(usersController.getUsers)
  .post(usersController.postUser);

module.exports = usersRouter;
