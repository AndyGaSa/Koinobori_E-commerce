const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('ecommerceApi');
const chalk = require('chalk');

require('./src/config/ddbb.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));

const productsRouter = require('./src/routes/products.router');
const usersRouter = require('./src/routes/users.router');

server.use('/api/products', productsRouter);
server.use('/api/users', usersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost${port}`)}`)
);
