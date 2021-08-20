require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('ecommerceApi');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productRouter = require('./src/routers/productRouter');

server.use('/api/products', productRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`),
);
