const { Router } = require('express');
const {
  createOne,
  getAll,
  getById,
  updateOneById,
  addTaskToUser,
  deleteOneById,
  deleteTaskToUser
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/tasks/:userId')
  .put(addTaskToUser)
  .delete(deleteTaskToUser);

userRouter
  .route('/:userId')
  .get(getById)
  .delete(deleteOneById)
  .put(updateOneById);

module.exports = userRouter;
