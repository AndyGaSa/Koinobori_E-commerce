const { Router } = require('express');
const {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/:userId')
  .get(getOneById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = userRouter;
