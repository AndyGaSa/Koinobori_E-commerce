const { Router } = require('express');
const {
  postOne, getOne, putOne,
} = require('../controllers/usersController');

const usersRouter = new Router();

usersRouter.route('/')
  .post(postOne); // 1. Crea el usuario.

usersRouter.route('/:userId')
  .get(getOne)
  .put(putOne);

module.exports = usersRouter;
