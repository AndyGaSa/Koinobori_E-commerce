const express = require('express');
require('dotenv').config();
const debug = require('debug')('shop');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/configMongoose');

const server = express();
const port = process.env.PORT || 5000;
server.use(morgan('dev'));
server.use(express.json());

const usersRouter = require('./src/routes/usersRouter');

server.use('/shop/users', usersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
