const express = require('express');
require('dotenv').config();
const debug = require('debug')('netGnomes');
const morgan = require('morgan');
const chalk = require('chalk');

require('./src/config/mongooseConfig');

const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(morgan('dev'));

const gnomeRouter = require('./src/routers/gnomeRouter');

server.use('/api/gnomes', gnomeRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.cyanBright(`http://localhost:${port}`)}`)
);
