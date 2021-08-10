const express = require('express');
require('dotenv').config();
const debug = require('debug')('beers');
const chalk=require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));

const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue( `http://localhost:${port}`)}`),
);
