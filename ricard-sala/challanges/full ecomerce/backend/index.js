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

server.use('/api/products', prouductsRouter);
server.listen(
  port,
  () => debug(`server is running on http://localhost:${port}`),
);
