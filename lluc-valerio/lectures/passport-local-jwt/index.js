// imports
require('dotenv').config();
const express = require('express');
const debug = require('debug')('passportServer');
const chalk = require('chalk');
const morgan = require('morgan');

// DDBB connection
require('./src/config/databaseConfig');
require('./src/passport/localStrategy');

// server vars
const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
// server.use(express.json());

// routes

// Server Main Route

server.get('/', (req, res) => {
  res.send('server root works');
});

// start Server
server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
