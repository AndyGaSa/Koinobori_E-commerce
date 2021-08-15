require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('ecommerce-server');
const morgan = require('morgan');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productListRouter = require('./src/routers/productlistRouter');

server.use('/api/productlist', productListRouter);

server.listen(
  port,
  debug(`Server is currently running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
