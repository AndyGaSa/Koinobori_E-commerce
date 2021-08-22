const { Router } = require('express');
const {
  createOne,
  getAll,
  getById,
  updateOneById,
  addTaskToUser,
  deleteOneById
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/tasks/:userId')
  .put(addTaskToUser);

userRouter
  .route('/:userId')
  .get(getById)
  .delete(deleteOneById)
  .put(updateOneById);

module.exports = userRouter;
