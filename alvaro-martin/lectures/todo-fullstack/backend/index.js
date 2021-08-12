const express = require('express');
require('dotenv').config();
const debug = require('debug')('todoApi');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const todoListRouter = require('./src/routes/todoListRouter');
const productsRouter = require('./src/routes/productRouter');
const cartsRouter = require('./src/routes/cartRouter');

server.use('/api/todoList', todoListRouter);
server.use('/api/products', productsRouter);
server.use('api/carts', cartsRouter);

server.listen(
  port,
  () => debug(`Server is running on ${(`http://localhost:${port}`)}`),
);
