const express = require('express');
require('dotenv').config();
const debug = require('debug')('beersApi');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const cartRouter = require('./src/routes/cartRouter');

server.use('/api/cart', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`),
);
