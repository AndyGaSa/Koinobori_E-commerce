const { Router } = require('express');
const usersControllers = require('../controllers/usersControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(usersControllers.getUsers)
  .post(usersControllers.postUser);

userRouter
  .route('/:userId')
  .get(usersControllers.getOneUser)
  .put(usersControllers.putUser)
  .delete(usersControllers.deleteUser);

module.exports = userRouter;
