const express = require('express');
const { createTask } = require('../controllers/toDoController');

const toDoRouter = express.Router();

toDoRouter
  .route('/todo')
  .post(createTask);

module.exports = toDoRouter;
