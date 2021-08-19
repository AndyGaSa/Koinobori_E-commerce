const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(userController.createOne)
  .get(userController.getAll);

userRouter
  .route('/:userId')
  .get(userController.getOneById)
  .put(userController.updateOneById)
  .delete(userController.deleteOneById);

module.exports = userRouter;
