/* eslint-disable no-console */

const express = require('express');
const debug = require('debug')('beers');
require('dotenv').config();
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());
const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);
server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`),
);
