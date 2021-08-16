const { Router } = require('express');
const {
  getAll,
  createOne
} = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

module.exports = userRouter;
