const { Router } = require('express');
const {
  getAll, createOne, getById, updateOneById, deleteOneById
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/:users')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = userRouter;
