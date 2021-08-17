const { Router } = require('express');

const {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(createOne)
  .get(getAll);

userRouter
  .route('/:userId')
  .get(getOneById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = userRouter;
