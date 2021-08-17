require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('beersApi');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const beersRouter = require('./src/routers/beersRouter');
const cartRouter = require('./src/routers/cartRouter');
const userRouter = require('./src/routers/userRouter');

server.use('/api/beers', beersRouter);
server.use('/api/cart', cartRouter);
server.use('/api/users', userRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
