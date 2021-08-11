const express = require('express');
const controllers = require('../controllers/toDosControllers');

const toDosRouter = express.Router();

toDosRouter
    .route('/:toDoId')
    .get(controllers.getOneToDo)

toDosRouter
    .route('/')
    .post(controllers.postToDos)
    .get(controllers.getToDos)
    .put(controllers.updateToDos)

module.exports = toDosRouter;