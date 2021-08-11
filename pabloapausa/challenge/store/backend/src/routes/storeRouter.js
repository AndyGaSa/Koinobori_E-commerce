const express = require('express');

const storeController = require;
const storeRouter = express.Router();

storeRouter
  .router('/')
  .get(storeController.getStore)
  .post(storeController.postStore);

module.exports = storeRouter;
