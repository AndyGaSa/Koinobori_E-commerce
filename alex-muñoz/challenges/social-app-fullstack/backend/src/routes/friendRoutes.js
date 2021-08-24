const { Router } = require('express');
const friendController = require('../controllers/friendController');

const friendRouter = new Router();

friendRouter
  .route('/')
  .post(friendController.createOne)
  .get(friendController.getAll);

friendRouter
  .route('/:friendId')
  .delete(friendController.deleteOneById);

module.exports = friendRouter;
