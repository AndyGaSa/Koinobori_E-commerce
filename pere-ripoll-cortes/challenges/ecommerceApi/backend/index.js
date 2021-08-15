require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 4005;
const productListRouter = require('./src/routers/productListRouter');
const cartRouter = require('./src/routers/cartRouter');
const userRouter = require('./src/routers/userRouter');

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', productListRouter);
server.use('/api', cartRouter);
server.use('/api', userRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`),
);
