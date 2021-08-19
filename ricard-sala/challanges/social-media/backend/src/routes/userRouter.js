const { Router } = require('express');

const {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  updateOneFriendById,
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
  .patch(updateOneFriendById)
  .delete(deleteOneById);

module.exports = userRouter;
