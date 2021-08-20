const express = require('express');

const server = express;
const port = 5000;

const routes = express.Router();
routes
  .route('/api/beers')
  .get((req, res) => {
    res.send('beers works');
  })
  .post((req, res) => {
    res.send('beer post underconstruction');
  });

server.use('/', routes);

server.listen(
  port,
  // eslint-disable-next-line no-console
  () => { console.log(`Server is running on http://localhost:${port}`); }
);
