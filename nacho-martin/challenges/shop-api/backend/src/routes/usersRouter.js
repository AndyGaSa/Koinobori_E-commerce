const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser);

usersRouter
  .route('/:userId')
  .get(usersController.getOneUser)
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

module.exports = usersRouter;
