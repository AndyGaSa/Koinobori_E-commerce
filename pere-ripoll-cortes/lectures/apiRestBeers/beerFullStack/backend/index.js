// Entrie point of this aplication
const express = require('express');

const server = express();
const port = 5000;

server.listen(port,
  () => console.log(`Server is running on http://localhost:${port}`));

const beersRoutes = express.Router();
beersRoutes
  .route('/api/beers')
  .get((req, res) => {
    res.send('beers work');
  })
  .post((req, res) => {
    res.send('beer post');
  });

// const oneBeerRouter = express.Router();
beersRoutes
  .route('/api/beers:beerId')
  .get((req, res) => {
    res.send('beers work');
  })
  .put((req, res) => {
    res.send('beer put');
  })
  .post((req, res) => {
    res.send('beer post');
  });

server.use('/', beersRoutes);
// server.use('/', oneBeerRouter);
