const { Router } = require('express');
const {
  mainPage,
  restricted,
  addToDo,
  updateToDo,
  deleteToDo,
  completeToDo,
  uncompleteToDo
} = require('../controllers/server.controller');

const router = Router();

router
  .route('/markToDo/ToDo/:toDoId')
  .get(completeToDo);

router
  .route('/markToDo/Completed/:toDoId')
  .get(uncompleteToDo);

router
  .route('/deleteToDo/:toDoId')
  .get(deleteToDo);

router
  .route('/updateToDo/:toDoId')
  .post(updateToDo);

router
  .route('/toDo')
  .post(addToDo);

router
  .route('/restricted')
  .get(restricted);

router
  .route('/')
  .get(mainPage);

module.exports = router;
