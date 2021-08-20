require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const prouductsRouter = require('./src/routes/productsRouter');
const userRouter = require('./src/routes/userRouter');
const cartRouter = require('./src/routes/cartRouter');

server.use('/api/products', prouductsRouter);
server.use('/api/users', userRouter);
server.use('/api/cart', cartRouter);

server.listen(
  port,
  () => debug(`server is running on http://localhost:${port}`),
);
