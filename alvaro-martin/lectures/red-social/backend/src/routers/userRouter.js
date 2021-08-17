const { Router } = require('express');
const {
  getAll,
  createOne,
  getOneById,
  deleteOneById,
  updateOneById,
} = require('../controllers/usersController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

userRouter
  .route('/:ObjectId')
  .get(getOneById)
  .delete(deleteOneById)
  .put(updateOneById);

module.exports = userRouter;
