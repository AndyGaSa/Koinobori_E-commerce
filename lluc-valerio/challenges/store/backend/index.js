// imports
require('dotenv').config();
const express = require('express');
const debug = require('debug')('storeApi');
const chalk = require('chalk');
const morgan = require('morgan');

// DDBB connection
require('./src/config/mongooseConfig');

// server vars
const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('tiny'));
server.use(express.json());

// routes
const cartRouter = require('./src/routes/cartRoutes');
const productRouter = require('./src/routes/productRoutes');
const userRouter = require('./src/routes/userRoutes');

// Server Main Route
server.use('/api/cart', cartRouter);
server.use('/api/product', productRouter);
server.use('/api/user', userRouter);

// start Server
server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
