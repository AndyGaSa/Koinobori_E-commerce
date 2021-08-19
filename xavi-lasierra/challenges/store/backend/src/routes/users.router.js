const express = require('express');
const {
  getUsers,
  createUser,
  findOneUserById,
  getOneUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .get(getUsers)
  .post(createUser);

usersRouter
  .route('/:userId')
  .all(findOneUserById)
  .get(getOneUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = usersRouter;
