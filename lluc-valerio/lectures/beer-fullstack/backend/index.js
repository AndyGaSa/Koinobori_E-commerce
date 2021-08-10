// imports
require('dotenv').config();
const express = require('express');
const debug = require('debug')('beersApi');
const chalk = require('chalk');
const morgan = require('morgan');

// server vars
const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('tiny'));
server.use(express.json());

// routes
const beersRouter = require('./src/routes/beerRoutes');

// Server Main Route
server.use('/api/beers', beersRouter);

// start Server
server.listen(
  port,
  // eslint-disable-next-line no-console
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
