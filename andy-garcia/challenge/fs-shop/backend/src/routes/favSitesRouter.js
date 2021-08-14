const express = require('express');
const favSitesController = require('../controllers/favSitesController');

const favSitesRouter = express.Router();

favSitesRouter
  .route('/')
  .get(favSitesController.getUserFavs);

favSitesRouter
  .route('/:favid')
  .all(favSitesController.checkFavSites)
  .post(favSitesController.addFavSite)
  .put(favSitesController.updateFavSite)
  .delete(favSitesController.deleteFavSite);

module.exports = favSitesRouter;
