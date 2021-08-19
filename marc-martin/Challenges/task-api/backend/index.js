require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productRouter = require('./src/routes/productRouter');
const userRouter = require('./src/routes/userRouter');
const cartRouter = require('./src/routes/cartRouter');

server.use('/api/products', productRouter);
server.use('/api/users', userRouter);
server.use('/api/cart', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
