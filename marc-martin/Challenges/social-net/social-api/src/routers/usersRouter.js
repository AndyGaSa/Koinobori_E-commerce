const { Router } = require('express');
const userController = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(userController.createOneUser)
  .get(userController.getAllUsers);

userRouter
  .route('/:userId/')
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteOneById);

module.exports = userRouter;
