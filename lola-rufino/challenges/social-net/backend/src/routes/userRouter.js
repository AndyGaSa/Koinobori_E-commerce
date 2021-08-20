const { Router } = require('express');
const userControllers = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);

userRouter
  .route('/:userId/')
  .get(userControllers.getOneUserById)
  .put(userControllers.updateUserById)
  .delete(userControllers.deleteUserById);

module.exports = userRouter;
