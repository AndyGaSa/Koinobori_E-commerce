const { Router } = require('express');
const {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  deleteOneUserById
} = require('../controllers/usersControllers');

const usersRouter = new Router();

usersRouter
  .route('/')
  .get(getAllUsers)
  .post(createOneUser);

usersRouter
  .route('/')
  .get(getOneUserById)
  .put(updateOneUserById)
  .delete(deleteOneUserById);

module.exports = usersRouter;
