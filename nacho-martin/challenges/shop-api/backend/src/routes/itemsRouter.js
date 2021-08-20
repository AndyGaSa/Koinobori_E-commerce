const express = require('express');
const itemsController = require('../controllers/itemsController');

const itemsRouter = express.Router();

itemsRouter
  .route('/')
  .get(itemsController.getItems)
  .post(itemsController.createItem);

itemsRouter
  .route('/:itemId')
  .get(itemsController.getById)
  .put(itemsController.updateItem)
  .delete(itemsController.deleteItem);

module.exports = itemsRouter;
