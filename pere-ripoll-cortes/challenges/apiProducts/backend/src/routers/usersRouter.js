const express = require('express');
// const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter
  .route('/users')
  .get()
  .post();

usersRouter
  .route('/users/:userId')
  .all()
  .get()
  .put()
  .delete();

module.exports = usersRouter;
