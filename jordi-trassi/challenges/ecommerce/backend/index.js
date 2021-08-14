require('dotenv').config();
const express = require('express');
const debug = require('debug')('ecommerceApi');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productRouter = require('./src/routers/productRouter');

server.use('/api/products', productRouter);

server.listen(
  port,
  () => debug(`Server is running on ${(`http://localhost:${port}`)}`),
);
