const express = require('express');
require('dotenv').config();
const debug = require('debug')('bookShop');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');

server.use('/api/users', userRouter);

const productRouter = require('./src/routes/productRouter');

server.use('/api/products', productRouter);

const cartRouter = require('./src/routes/cartRouter');

server.use('/api/carts', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
