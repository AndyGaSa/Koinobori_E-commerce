const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('server');
const chalk = require('chalk');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.use(
  express.static(path.join(__dirname, '/public'))
);

server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);

server.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))
);

server.set('view engine', 'ejs');

const router = require('./src/routers/server.router');

server.use('/', router);

server.listen(
  port,
  () => debug(`Server is running in ${chalk.magenta(`http://localhost:${port}`)}`)
);
