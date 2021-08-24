const { Router } = require('express');
const {
  createOne, getAll, getById, updateOneById, deleteOneById
} = require('../controllers/taskControllers');

const taskRouter = new Router();

taskRouter
  .route('/')
  .get(getAll)
  .post(createOne);

taskRouter
  .route('/:taskId')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = taskRouter;
