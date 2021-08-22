const { Router } = require('express');

const mainRouter = new Router();

const {
  getIndex,
  get404,
  postTasks,
  deleteTask,
} = require('../controllers/mainController');

mainRouter
  .route('/delete')
  .post(deleteTask);
mainRouter
  .route('/')
  .get(getIndex);
mainRouter
  .route('*')
  .post(postTasks)
  .get(get404);
module.exports = mainRouter;
