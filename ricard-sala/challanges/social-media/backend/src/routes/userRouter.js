const { Router } = require('express');

const {
  createOne,
  getAll,
  getOneById,
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(createOne)
  .get(getAll);

userRouter
  .route('/:userId')
  .get(getOneById);

module.exports = userRouter;
