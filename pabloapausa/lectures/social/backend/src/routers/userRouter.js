const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.route('/')
  .post(userController.postOne)
  .get(userController.getAll);

userRouter.route('/:userId')
  .get(userController.getOne);

module.exports = userRouter;
