const { Router } = require('express');
const {
  getAll,
  postOne,
  getOne,
  putOne,
  deleteOne,
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(postOne);

userRouter
  .route('/:userId')
  .get(getOne)
  .put(putOne)
  .delete(deleteOne);

module.exports = userRouter;
