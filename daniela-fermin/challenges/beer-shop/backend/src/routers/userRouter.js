const { Router } = require('express');
const {
  getAll,
  createOne,

  deleteOneById
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/:userId')
  .delete(deleteOneById);

module.exports = userRouter;
