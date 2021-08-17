const { Router } = require('express');
const {
  getUsers, postUser, findOneUser, getOneUser, putOneUser, deleteOneUser,
} = require('../controllers/usersController');

const usersRouter = new Router();

usersRouter
  .route('/users')
  .get(getUsers)
  .post(postUser);
usersRouter
  .route('/users/:userId')
  .all(findOneUser)
  .get(getOneUser)
  .put(putOneUser)
  .delete(deleteOneUser);

module.exports = usersRouter;
