require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('shopApi');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use('/shopApi', usersRouter);
server.use('/shopApi', productsRouter);

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`)
);
