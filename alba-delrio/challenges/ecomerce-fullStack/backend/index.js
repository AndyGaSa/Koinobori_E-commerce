const express = require('express');
require('dotenv').config();
const debug = require('debug')('ecomerce');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const cartRouter = require('./src/routers/cartRouter');
const articleRouter = require('./src/routers/articleRouter');
const userRouter = require('./src/routers/userRouter');

server.use('/api/cart', cartRouter);
server.use('/api/article', articleRouter);
server.use('./api/user', userRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
