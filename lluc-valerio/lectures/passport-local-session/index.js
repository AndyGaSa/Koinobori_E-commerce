// imports
require('dotenv').config();
const express = require('express');
const debug = require('debug')('passportServer');
const chalk = require('chalk');
const morgan = require('morgan');
const router = require('./src/routes/router');

// DDBB connection
require('./src/config/databaseConfig');

// server vars
const server = express();
const port = process.env.PORT || 5000;

// Passport Config
require('./src/config/passportConfig')(server);

server.use(morgan('dev'));
server.use(express.json());

// Server Main Route
server.use('/', router);

// start Server
server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
