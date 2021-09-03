const express = require('express');
const {
  createTask, getAll, getOneById, addNewTask, deleteOneTask,
} = require('../controllers/toDoController');

const toDoRouter = express.Router();

toDoRouter
  .route('/todo')
  .post(createTask)
  .get(getAll);

toDoRouter
  .route('/todo/:userId')
  .get(getOneById)
  .put(addNewTask)
  .delete(deleteOneTask);

module.exports = toDoRouter;
