const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();
userRouter
  .route('/')
  .post(userController.createOne)
  .get(userController.getAll);
userRouter
  .route('/:userId')
  .get(userController.findOneUser)
  .put(userController.updateOneUser)
  .delete(userController.deleteOneUser);
module.exports = userRouter;
