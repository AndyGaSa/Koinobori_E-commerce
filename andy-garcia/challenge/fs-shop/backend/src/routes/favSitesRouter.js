const express = require('express');
const favSitesController = require('../controllers/favSitesController');

const favSitesRouter = express.Router();

favSitesRouter
  .route('/:userid')
  .all(favSitesController.checkFavSites)
  .post(favSitesController.addFavSite)
  .put(favSitesController.updateFavSite)
  .delete(favSitesController.deleteFavSite);

module.exports = favSitesRouter;
