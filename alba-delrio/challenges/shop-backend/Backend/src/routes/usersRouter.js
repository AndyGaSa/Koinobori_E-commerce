const { Router } = require('express');
const {
  getAll,
  createUser,
  getOneById,
  deleteOneById

} = require('../controllers/userController');

const usersRouter = new Router();

usersRouter
  .route('/')
  .get(getAll)
  .post(createUser);

usersRouter
  .route('/:user')
  .get(getOneById)
  .delete(deleteOneById);

module.exports = usersRouter;
