const { Router } = require('express');

const productsRouter = Router();

productsRouter
  .route('/')
  .get(
    (req, res) => {
      res.send('hi');
    }
  );

module.exports = productsRouter;
