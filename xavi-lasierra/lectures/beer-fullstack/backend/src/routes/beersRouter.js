const express = require('express');
const beersController = require('../controllers/beersController');

const beersRouter = express.Router();

beersRouter
  .route('/')
  .get(beersController.getBeers)
  .post(beersController.postBeer);

beersRouter
  .route('/:beerId')
  .get(beersController.getOneBeer)
  .post(beersController.postBeer);

/* beersRouter
  .route('/api/beers/:beerId')
  .get((req, res) => {
    res.send('one beer get under construction');
  })
  .post((req, res) => {
    res.send('one beer put under contruction');
  })
  .delete((req, res) => {
    res.send('one beer delete under contruction');
  }); */

module.exports = beersRouter;
