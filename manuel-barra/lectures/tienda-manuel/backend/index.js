require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('storeApi');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productsRouter = require('./src/routers/productRouter');
const userRouter = require('./src/routers/userRouter');
const cardRouter = require('./src/routers/carRouter');

server.use('/api/products', productsRouter);
server.use('/api/users', userRouter);
server.use('/api/cart', cardRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
