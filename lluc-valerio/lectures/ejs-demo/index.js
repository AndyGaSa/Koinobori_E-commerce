require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('serverSSR');
const chalk = require('chalk');

// server data
const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
// server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World');
});

// start server
server.listen(
  port,
  () => debug(`Server is running on ${chalk.green(`http://localhost:${port}`)}`)
);
