const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter
  .route('/')
  .get(userController.getAll)
  .post(userController.createOne);
userRouter
  .route('/:userId')
  .get(userController.getOneById)
  .delete(userController.deleteOneById)
  .put(userController.updateOneById);

module.exports = userRouter;
