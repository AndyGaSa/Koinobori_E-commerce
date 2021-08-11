const express = require('express');
const toDosController = require('../controllers/toDosController');

const toDosRouter = express.Router();

toDosRouter
  .route('/')
  .get(toDosController.gettoDos)
  .post(toDosController.posttoDo);

toDosRouter
  .route('/filter/:toDoId')
  .all(toDosController.findOnetoDo)
  .get(toDosController.getOnetoDo)
  .put(toDosController.putOnetoDo)
  .delete(toDosController.deleteOnetoDo);
toDosRouter
  .route('/random')
  .get(toDosController.getRandomtoDo);

module.exports = toDosRouter;
