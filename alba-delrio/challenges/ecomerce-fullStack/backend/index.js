const express = require('express');
require('dotenv').config();
const debug = require('debug')('shops');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const usersRouter = require('./src/routes/usersRouter');
const cartRouter = require('./src/routes/cartRouter');
const productRouter = require('./src/routes/productRouter');

server.use('/api/user/', usersRouter);
server.use('/api/product', productRouter);
server.use('/api/cart', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
