require('dotenv').config();
const express = require('express');
const debug = require('debug')('gnomosNet');
const morgan = require('morgan');
const chalk = require('chalk');

require('./src/configDDBB/configDDBB');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));

server.post('/api/users', (req, res) => res.send('gnomos API funciona'));

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
