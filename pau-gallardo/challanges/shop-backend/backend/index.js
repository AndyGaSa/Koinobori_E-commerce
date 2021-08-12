const express = require('express');
require('dotenv').config();
const debug = require('debug')('shopApi');
const chalk = require('chalk');
const morgan = require('morgan');

require('./scr/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const usersRouter = require('./scr/routes/userRouter');
const productsRouter = require('./scr/routes/productRouter');
const cartsRouter = require('./scr/routes/cartRouter');

server.use('/api/users', usersRouter);
server.use('/api/products', productsRouter);
server.use('/api/carts', cartsRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`),
);
