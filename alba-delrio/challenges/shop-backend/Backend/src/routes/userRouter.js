const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/')
  .all(userController.findOneUSer)
  .get(userController.getUser)
  .post(userController.updateUser)
  .delete(userController.deleteUSer);

module.exports = userRouter;
