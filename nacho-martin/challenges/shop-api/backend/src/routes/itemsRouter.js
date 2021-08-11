const express = require('express');
const itemsController = require('../controllers/itemsController');

const itemsRouter = express.Router();

itemsRouter
  .route('/')
  .get(itemsController.getItems)
  .post(itemsController.createItem);

itemsRouter
  .route('/:id')
  .get(itemsController.updateItem);

module.exports = itemsRouter;
