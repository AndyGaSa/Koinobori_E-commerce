const express = require('express');
require('dotenv').config();
const debug = require('debug')('cartItem');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const cartItemRouter = require('./src/routes/cartItemRouter');

server.use('/api/cartItem', cartItemRouter);

const userRouter = require('./src/routes/userRouter');

server.use('/api/user', userRouter);

const productRouter = require('./src/routes/productRouter');

server.use('/api/products', productRouter);

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`)
);
