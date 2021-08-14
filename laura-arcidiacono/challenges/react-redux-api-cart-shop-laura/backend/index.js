const express = require('express');
require('dotenv').config();
const debug = require('debug')('bookShop');
const morgan = require('morgan');
const chalk = require('chalk');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productRouter = require('./src/routes/productRouter');

server.use('/api/products', productRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
