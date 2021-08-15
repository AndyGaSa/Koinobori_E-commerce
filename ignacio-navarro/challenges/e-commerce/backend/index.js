require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const beersRouter = require('./src/routes/beersRouter');
const cartRouter = require('./src/routes/cartRouter');
const clientRouter = require('./src/routes/clientRouter');

server.use('/api/beers', beersRouter);
server.use('/api/cart', cartRouter);
server.use('/api/client', clientRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`),
);
