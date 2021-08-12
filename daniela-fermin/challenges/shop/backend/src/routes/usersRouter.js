const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter
  .route('/users')
  .get(usersController.getUsers)
  .post(usersController.postUser);
usersRouter
  .route('/users/:userId')
  .all(usersController.findOneUser)
  .get(usersController.getOneUser)
  .put(usersController.putOneUser)
  .delete(usersController.deleteOneUser);

module.exports = usersRouter;
