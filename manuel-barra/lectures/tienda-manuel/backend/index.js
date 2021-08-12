const express = require('express');
require('dotenv').config();
require('./src/config/mongooseConfig');

const debug = require('debug')('storeApi');
const debugDev = require('debug')('dev');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRoutes = require('./src/routers/userRouters');
const productsRoutes = require('./src/routers/productRouter');
const cardRoutes = require('./src/routers/carRouter');

server.use('/api/products', productsRoutes);
server.use('/api/users', userRoutes);
server.use('/api/cart', cardRoutes);

debugDev('Hola mundo');

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
