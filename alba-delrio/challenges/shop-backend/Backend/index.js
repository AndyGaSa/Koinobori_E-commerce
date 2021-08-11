const express = require('express');

require('dotenv').config();
const debug = require('debug')('beers');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const cartsRouter = require('./src/routes/cartsRouter');

server.use('/api/carts', cartsRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
