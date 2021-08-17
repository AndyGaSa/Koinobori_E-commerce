const { Router } = require('express');
const usersController = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(usersController.postUser)
  .get(usersController.getAllUsers);
userRouter
  .route('/:userId')
  .get(usersController.getOneUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = userRouter;
