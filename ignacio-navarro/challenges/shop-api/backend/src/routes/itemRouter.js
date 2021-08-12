const express = require('express');

const itemController = require('../controllers/itemControllers');

const itemRouter = express.Router();

itemRouter
  .route('/')
  .post(itemController.postItem);

module.exports = itemRouter;
