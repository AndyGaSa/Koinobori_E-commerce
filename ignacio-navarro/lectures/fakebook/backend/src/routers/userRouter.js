const { Router } = require('express');
const usersController = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/friends')
  .get(usersController.getFriends);
userRouter
  .route('/friends/:params')
  .put(usersController.putFriends);
userRouter
  .route('/adversaries')
  .get(usersController.getAdversaries);
userRouter
  .route('/')
  .post(usersController.postUser)
  .get(usersController.getAllUsers);
userRouter
  .route('/:userId')
  .get(usersController.getOneUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = userRouter;
