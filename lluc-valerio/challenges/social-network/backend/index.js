require('dotenv').config();
const express = require('express');
const debug = require('debug')('social-net');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

server.post('/', (req, res) => res.send('api funciona'));

server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
