const express = require('express');
const controller = require('../controllers/taskList');

const taskListRouter = express.Router();

taskListRouter
  .route('/:taskListId')
  .get(controller.getOne)
  .post(controller.updateListbyId);

taskListRouter
  .route('/')
  .post(controller.createOne);

module.exports = taskListRouter;
