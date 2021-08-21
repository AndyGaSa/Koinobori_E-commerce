const { Router } = require('express');

const mainRouter = new Router();
const { getTasks, postTasks } = require('../controllers/taskController');

mainRouter
  .route('/')
  .get(getTasks)
  .post(postTasks);
module.exports = mainRouter;
