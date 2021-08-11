require('dotenv').config();
// important
const express = require('express');
const debug = require('debug')('beerApi');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const beersRouter = require('./src/routes/beersRouter');

const server = express();
const port = process.env.PORT || 5001;

server.use(morgan('dev'));
server.use(express.json());
server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.green(`http://localhost:${port}`)}`),
);
