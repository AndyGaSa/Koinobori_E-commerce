const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('ecommerce-server');
const morgan = require('morgan');
require('dotenv').config();

require('./config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productListRouter = require('./routers/productListRouter');
const cartRouter = require('./routers/cartRouter');
const userRouter = require('./routers/userRouter');

server.use('/api/product-list', productListRouter);
server.use('/api/cart', cartRouter);
server.use('/api/users', userRouter);

server.listen(
  port,
  debug(`Server is currently running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
