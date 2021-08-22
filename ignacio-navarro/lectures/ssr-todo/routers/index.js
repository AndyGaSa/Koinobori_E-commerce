const { Router } = require('express');

const mainRouter = new Router();

const { getIndex, get404 } = require(
  '../controllers/mainController',
);
const { getCreate, createTask } = require(
  '../controllers/createController',
);
const { deleteTask } = require(
  '../controllers/deleteController',
);
const { getEdit, editTask } = require(
  '../controllers/editController',
);
const { getLogin, checkUser } = require(
  '../controllers/loginController',
);

mainRouter
  .route('/delete/:taskId')
  .get(deleteTask);
mainRouter
  .route('/edit/:taskId')
  .get(getEdit)
  .put(editTask);
mainRouter
  .route('/create')
  .get(getCreate)
  .post(createTask);
mainRouter
  .route('/login')
  .get(getLogin)
  .post(checkUser);
mainRouter
  .route('/')
  .get(getIndex);
mainRouter
  .route('*')
  .get(get404);
module.exports = mainRouter;
