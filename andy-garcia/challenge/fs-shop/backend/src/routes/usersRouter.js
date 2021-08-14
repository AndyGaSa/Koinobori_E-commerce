const express = require('express');
const userController = require('../controllers/userController');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .post(userController.findOrSetUser);

usersRouter
  .route('/:userid')
  .get(userController.getUserById)
  .delete(userController.removeUserById);

module.exports = usersRouter;
