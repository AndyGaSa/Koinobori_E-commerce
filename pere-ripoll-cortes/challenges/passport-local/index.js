require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const router = require('./src/routes/router');

const server = express();
const port = process.env.PORT || 6000;

require('./src/config/passportConfig')(server);

server.use(express.json());
server.use(morgan('dev'));
server.use('/', router);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`),
);
