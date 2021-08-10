// imports
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('beersApi');
const chalk = require('chalk');

// server data
const port = process.env.PORT || 5000;
const beersRouter = require('./src/routes/beerRoutes');

const server = express();
server.use(morgan('tiny'));
server.use(express.json());
server.use('/api/beers', beersRouter);

// DDBB connection
require('./src/config/mongooseConfig');

// start server
server.listen(
  port,
  () => debug(`Server is running on ${chalk.green(`http://localhost:${port}`)}`)
);
