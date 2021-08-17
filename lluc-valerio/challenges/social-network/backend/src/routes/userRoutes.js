const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter
  .route('/')
  .get(userController.getAll)
  .post(userController.createOne);
userRouter
  .route('/:userId')
  .get(userController.getOne)
  .delete(userController.deleteOne)
  .put(userController.updateOne);

module.exports = userRouter;
