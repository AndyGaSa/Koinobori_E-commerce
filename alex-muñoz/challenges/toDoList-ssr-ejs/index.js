require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('toDo');
const path = require('path');
const chalk = require('chalk');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/mongooseConfig');

server.use(morgan('dev'));
server.use(express.json());

server.listen(
  port, () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
