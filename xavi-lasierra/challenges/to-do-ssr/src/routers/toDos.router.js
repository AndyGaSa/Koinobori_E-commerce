const { Router } = require('express');
const {
  addToDo,
  updateToDo,
  deleteToDo,
  completeToDo,
  uncompleteToDo
} = require('../controllers/toDos.controller');

const router = Router();

router
  .route('/mark/ToDo/:toDoId')
  .get(completeToDo);

router
  .route('/mark/Completed/:toDoId')
  .get(uncompleteToDo);

router
  .route('/delete/:toDoId')
  .get(deleteToDo);

router
  .route('/update/:toDoId')
  .post(updateToDo);

router
  .route('/create')
  .post(addToDo);

module.exports = router;
