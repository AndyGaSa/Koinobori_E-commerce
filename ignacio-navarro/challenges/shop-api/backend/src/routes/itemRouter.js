const express = require('express');

const itemController = require('../controllers/itemControllers');

const itemRouter = express.Router();

itemRouter
  .route('/')
  .get(itemController.getItem)
  .post(itemController.postItem);
itemRouter
  .route('/:itemId')
  .get(itemController.getItemById)
  .delete(itemController.deleteItem)
  .put(itemController.updateItem);

module.exports = itemRouter;
