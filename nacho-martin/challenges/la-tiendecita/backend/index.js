const express = require('express');
require('dotenv').config();
const debug = require('debug')('laTiendecita');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5080;
server.use(morgan('dev'));
server.use(express.json());

const productsRouter = require('./src/routers/productsRouter');
const cartRouter = require('./src/routers/cartRouter');

server.use('/la-tiendecita/api/products', productsRouter);
server.use('/la-tiendecita/api/cart', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.cyanBright(`http://localhost:${port}`)}`)
);
