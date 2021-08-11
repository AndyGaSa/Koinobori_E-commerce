const express = require('express');
require('dotenv').config();
const debug = require('debug')('shopApi');
const chalk = require('chalk');
const morgan = require('morgan');

require('./scr/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

// const beersRouter = require('./src/routes/beersRouter');

// server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`),
);
