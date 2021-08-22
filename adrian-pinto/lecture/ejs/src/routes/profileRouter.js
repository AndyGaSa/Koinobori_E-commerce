const express = require('express');
const profileController = require('../controllers/profileController');

const profileRouter = express.Router();

profileRouter
  .route('/profile')
  .get(profileController.getProfileTemplate);

module.exports = profileRouter;
