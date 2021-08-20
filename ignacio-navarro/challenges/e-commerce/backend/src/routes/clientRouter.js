const express = require('express');
const clientController = require('../controllers/clientController');

const ClientRouter = express.Router();

ClientRouter
  .route('/')
  .get(clientController.getClient)
  .post(clientController.createClient);

ClientRouter
  .route('/:ClientId')
  .all(clientController.findOneClient)
  .get(clientController.getOneClient);

module.exports = ClientRouter;
