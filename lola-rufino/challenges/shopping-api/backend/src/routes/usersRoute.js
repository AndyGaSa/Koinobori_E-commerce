const express = require('express');
const usersController = require('../controllers/usersControllers');

const usersRouter = express.Router();

usersRouter
  .route('/users')
  .get(usersController.getUsers)
  .post(usersController.postUsers);

usersRouter
  .route('/users/:usersId')
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

module.exports = usersRouter;
