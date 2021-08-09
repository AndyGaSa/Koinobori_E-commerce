const express = require('express');

const beersRouter = express.Router();
const beersMock = require('../mocks/beersMock');

beersRouter
  .route('/')
  .get((req, res) => {
    res.send(beersMock);
  });
module.exports = beersRouter;
