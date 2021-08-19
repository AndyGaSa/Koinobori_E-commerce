const { Router } = require('express');
const {
  getUsers,
  postUsers,
  getUser,
  deleteUser,
  updateUser
} = require('../controllers/usersControllers');

const usersRouter = new Router();

usersRouter
  .route('/')
  .get(getUsers)
  .post(postUsers);

usersRouter
  .route('/:userId')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = usersRouter;
