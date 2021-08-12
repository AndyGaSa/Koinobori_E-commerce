const express = require('express');
const {
  getUsers,
  postUser,
  getOneUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .get(getUsers)
  .post(postUser);

usersRouter
  .route('/:userId')
  .get(getOneUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = usersRouter;
