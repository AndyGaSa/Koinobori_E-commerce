require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('ecommerce-server');
const morgan = require('morgan');

require('./src/configs/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productListRouter = require('./src/routers/productlistRouter');
const userRouter = require('./src/routers/userRouter');
const cartRouter = require('./src/routers/cartRouter');

server.use('/api/productlist', productListRouter);
server.use('/api/users', userRouter);
server.use('/api/cart', cartRouter);

server.listen(
  port,
  debug(`Server is currently running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
