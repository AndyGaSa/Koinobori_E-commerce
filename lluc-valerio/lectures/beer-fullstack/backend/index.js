const express = require('express');

const server = express();
const port = 5000;

const beersRouter = express.Router();
beersRouter
  .route('/api/beers')
  .get((req, res) => {
    res.send('beers get under construction');
  })
  .post((req, res) => {
    res.send('beers post under construction');
  });

beersRouter
  .route('/api/beers/:beerId')
  .get((req, res) => {
    res.send('onebeer get under construction');
  })
  .post((req, res) => {
    res.send('onebeer post under construction');
  })
  .delete((req, res) => {
    res.send('onebeer delete under construction');
  });

server.use('/', beersRouter);

// console.log(Date.now());

server.listen(
  port,
  () => { console.log(`Server is running on http://localhost:${port} and ${Date.now()}`); }
);
