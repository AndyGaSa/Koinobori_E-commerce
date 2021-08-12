require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('StoreApi');
const productsRouter = require('./src/routers/productsRouter');
// const usersRouter = require('./src/routers/usersRouter');
// const basketRouter = require('./src/routers/basketRouter');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use('/products', productsRouter);
// server.use('/users', usersRouter);
// server.use('/basket', basketRouter);

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`),
);
