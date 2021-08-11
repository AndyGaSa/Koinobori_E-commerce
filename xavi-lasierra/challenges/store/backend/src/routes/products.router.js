const express = require('express');

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get(
    ((req, res) => {
      res.send('hello');
    })
  );

module.exports = productsRouter;
