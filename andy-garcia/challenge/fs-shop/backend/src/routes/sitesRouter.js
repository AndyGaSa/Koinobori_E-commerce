const express = require('express');
const sitesController = require('../controllers/sitesController');

const sitesRouter = express.Router();

sitesRouter
  .route('/')
  .get(sitesController.getAllSites)
  .post(sitesController.createSite);

sitesRouter
  .route('/:siteid')
  .put(sitesController.updateSite)
  .delete(sitesController.deleteSite);

module.exports = sitesRouter;
