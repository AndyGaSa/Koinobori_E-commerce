const express = require('express');
require('dotenv').config();
require('./src/config/mongooseConfig');

const debug = require('debug')('shopApi');
const debugDev = require('debug')('dev');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
const productsRoutes = require('./src/routes/productRoutes');
const carritoRoutes = require('./src/routes/carritoRoutes');

server.use('/api/users', userRoutes);
server.use('/api/products', productsRoutes);
server.use('/api/carrito', carritoRoutes);

debugDev('Esto es un mensaje de bryan ');

server.listen(
  port,
  () => debug(`Server is runing on http://localhost:${port}`)

);
