const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.route('/')
  .post(userController.postOne)
  .get(userController.getAll);

userRouter.route('/:userId')
  .get(userController.getOne)
  .put(userController.putOne)
  .delete(userController.deleteOne);

module.exports = userRouter;
