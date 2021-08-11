const express = require('express');
require('dotenv').config();
const debug = require('debug')('toDo');
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 6000;

server.use(morgan('dev'));
server.use(express.json());

server.get('/', (req, res) => {
  res.send('api works');
});

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
