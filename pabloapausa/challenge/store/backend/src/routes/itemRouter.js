const { Router } = require('express');
const {
  getAll,
  postOne,
  getOne,
  putOne,
  deleteOne,
} = require('../controllers/itemController');

const itemRouter = new Router();

itemRouter
  .route('/')
  .get(getAll)
  .post(postOne);

itemRouter
  .route('/itemId')
  .get(getOne)
  .put(putOne)
  .delete(deleteOne);

module.exports = itemRouter;
