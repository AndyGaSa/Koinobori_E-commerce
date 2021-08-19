const express = require('express');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get((req, res) => (res.send({ name: 'hola' })));

module.exports = beersRouter;
