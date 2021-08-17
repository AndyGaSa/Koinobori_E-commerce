const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter
  .route('/users')
  .post(userController.createOne)
  .get(userController.getAll);

userRouter
  .route('/users/:id')
  .put(userController.updateOneById)
  .delete(userController.deleteOneById)
  .get(userController.getOneById);

module.exports = userRouter;
