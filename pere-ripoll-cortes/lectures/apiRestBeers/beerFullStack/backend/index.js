const express = require('express');
require('dotenv').config();
const debug = require('debug')('beerApi');
const dev = require('debug')('dev');

const server = express();
const port = process.env.PORT || 4001;

// middlewear
server.use(express.json());

const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);

dev('Developer message, test');

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`),
);
