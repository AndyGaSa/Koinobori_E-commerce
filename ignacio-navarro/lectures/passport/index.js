require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/databaseConfig');
require('./src/passport/localStrategy');

const server = express();
const port = process.env.PORT;

server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('server root works');
});

server.listen(
  port,
  () => debug(`Server is running on port ${port}`),
);
