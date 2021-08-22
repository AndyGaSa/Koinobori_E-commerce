const express = require('express');
const profileController = require('../controllers/profileController');

const profileRouter = express.Router();

profileRouter
  .route('/')
  .get(profileController.getProfileTemplate);

module.exports = profileRouter;
