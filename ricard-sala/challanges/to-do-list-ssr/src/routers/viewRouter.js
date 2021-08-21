const express = require('express');
const { dashboard } = require('../controllers/viewController');

const dashboardRouter = express.Router();
dashboardRouter
  .route('/')
  .get(
    dashboard,
  );

module.exports = {
  dashboardRouter,
};
