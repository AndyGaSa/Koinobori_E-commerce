const express = require('express');
require('dotenv').config();
const debug = require('debug')('store');
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 6000;

server.use(morgan('dev'));
server.use(express.json);

server.get('/', (req, res) => {
  res.send('Ok');
});

server.listen(port, () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`));
