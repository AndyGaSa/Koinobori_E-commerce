const express = require('express');
require('dotenv').config();
const debug = require('debug')('gnomesSocial');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/ddbb.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const gnomesRouter = require('./src/routes/gnomes.router');
const loginRouter = require('./src/routes/login.router');

server.use('/api/gnomes', gnomesRouter);
server.use('/api/login', loginRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`)
);
