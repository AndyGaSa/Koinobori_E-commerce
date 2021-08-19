const { Router } = require('express');
const userControllers = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(userControllers.createOne)
  .get(userControllers.getAll);

userRouter
  .route('/:userId')
  .get(userControllers.getOneById)
  .put(userControllers.updateOneById)
  .delete(userControllers.deleteOneById);

module.exports = userRouter;
