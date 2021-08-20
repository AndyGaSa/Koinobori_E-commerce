const { Router } = require('express');
const {
  createOne, getAll, getById, updateOneById, deleteOneById
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/:userId')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = userRouter;
