const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('ecommerceApi');
const chalk = require('chalk');
const productsRouter = require('./src/routes/products.router');
const usersRouter = require('./src/routes/users.router');
const cartsRouter = require('./src/routes/carts.router');
const authRouter = require('./src/routes/auth.router');

require('./src/config/ddbb.config');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/passport.config')(server);

server.use(express.json());
server.use(morgan('dev'));

server.use('/api/products', productsRouter);
server.use('/api/users', usersRouter);
server.use('/api/carts', cartsRouter);
server.use('/api', authRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost${port}`)}`)
);
