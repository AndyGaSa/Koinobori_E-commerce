const express = require('express');
const controllers = require('../controllers/toDosControllers');

const toDosRouter = express.Router();

toDosRouter
    .route('/')
    .post(controllers.postToDos)
    .get(controllers.postToDos)

module.exports = toDosRouter;