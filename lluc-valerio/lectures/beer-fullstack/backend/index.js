// imports
const express = require('express');

// server vars
const server = express();
const port = 5000;
server.use(express.json());

// routes
const beersRouter = require('./src/routes/beerRoutes');

// Server Main Route
server.use('/api/beers', beersRouter);

// start Server
server.listen(
  port,
  // eslint-disable-next-line no-console
  () => { console.log(`Server is running on http://localhost:${port}`); }
);
