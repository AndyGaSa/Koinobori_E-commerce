const { Router } = require('express');
const {
  postOne, getOne, putOne, deleteOne,
} = require('../controllers/tasksController');

const tasksRouter = new Router();

tasksRouter.route('/')
  .post(postOne); // 2. Crea una task, asignándole el usuario.

tasksRouter.route('/:taskId')
  .get(getOne)
  .put(putOne)
  .delete(deleteOne);

module.exports = tasksRouter;

/*

Lista:
- Crear usuario.
- Asignar tasks a ese usuario.

*/
