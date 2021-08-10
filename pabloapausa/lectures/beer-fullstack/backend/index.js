const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('beers');
const chalk = require('chalk');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());
const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);
server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgMagenta(`http://localhost:${port}`)}`),
);
