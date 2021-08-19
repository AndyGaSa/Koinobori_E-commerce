require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('shopApi');
const usersRouter = require('./src/routers/usersRouter');
const productsRouter = require('./src/routers/productsRouter');
const cartRouter = require('./src/routers/cartRouter');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());
server.use('/shopApi', usersRouter);
server.use('/shopApi', productsRouter);
server.use('/shopApi', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`)
);
