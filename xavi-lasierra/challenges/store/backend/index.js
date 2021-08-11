const express = require('express');
require('dotenv').config();
const debug = require('debug')('storeApi');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongoose.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productsRouter = require('./src/routes/products.router');
const usersRouter = require('./src/routes/users.router');
const cartsRouter = require('./src/routes/carts.router');

server.use('/api/products', productsRouter);
server.use('/api/users', usersRouter);
server.use('/api/carts', cartsRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`)
);
