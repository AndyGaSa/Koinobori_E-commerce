const { Router } = require('express');
const {
  getUserById,
  createUser,
  deleteUserById,
  getAllUsers,
  updateUserById
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser);

userRouter
  .route('/:userId')
  .get(getUserById)
  .delete(deleteUserById)
  .put(updateUserById);

module.exports = userRouter;
