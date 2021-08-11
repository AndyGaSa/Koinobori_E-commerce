const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/')
  .all(userController.findProduct)
  .get(userController.getProduct)
  .post(userController.updateProduct)
  .delete(userController.deleteProduct);

module.exports = userRouter;
