const express = require('express');
const {
  createTask,
  getAll,
  getOneById,
  getNewTask,
  deleteOneTask,
} = require('../controllers/toDoController');

const toDoRouter = express.Router();

toDoRouter
  .route('/todo')
  .post(createTask)
  .get(getAll);
toDoRouter
  .route('/todo/:userId')
  .get(getOneById)
  .put(getNewTask)
  .delete(deleteOneTask);
module.exports = toDoRouter;
