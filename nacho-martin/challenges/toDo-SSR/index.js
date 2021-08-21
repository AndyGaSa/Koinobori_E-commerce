require('dotenv').config();
const express = require('express');
const debug = require('debug')('toDo');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5005;
server.use(morgan('dev'));
server.use(express.json());

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port} `)
);
