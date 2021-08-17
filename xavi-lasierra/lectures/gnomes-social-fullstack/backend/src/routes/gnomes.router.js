const { Router } = require('express');

const gnomesRouter = Router();

gnomesRouter
  .route('/')
  .post(
    (req, res) => {
      res.json('hello');
    }
  );

module.exports = gnomesRouter;
