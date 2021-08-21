const express = require('express');
const { createTask, getAll, getOneById } = require('../controllers/toDoController');

const toDoRouter = express.Router();

toDoRouter
  .route('/todo')
  .post(createTask)
  .get(getAll);

toDoRouter
  .route('/todo/:userId')
  .get(getOneById);

module.exports = toDoRouter;
