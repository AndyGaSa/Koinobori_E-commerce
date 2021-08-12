const { Router } = require('express');
const {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
} = require('../controllers/itemController');

const itemRouter = new Router();

itemRouter
  .route('/')
  .get(getAll)
  .post(createOne);

itemRouter
  .route('/itemId')
  .get(getOneById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = itemRouter;
