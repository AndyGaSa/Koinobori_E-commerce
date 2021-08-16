const { Router } = require('express');
const {
  getAll,
  createOne,
  getOneById,

} = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/:userId')
  .get(getOneById);

module.exports = userRouter;
