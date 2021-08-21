const express = require('express');
const controller = require('../controllers/task');

const taskRouter = express.Router();
taskRouter
  .route('/')
  .post(controller.createOne);

module.exports = taskRouter;
