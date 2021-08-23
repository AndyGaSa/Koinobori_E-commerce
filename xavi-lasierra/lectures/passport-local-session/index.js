/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const router = require('./src/routes/server.router');

require('./src/config/ddbb.config');
require('./src/config/passportLocalStrategy');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/passport.config')(server);

server.use(morgan('dev'));
server.use(express.json());

server.use('/', router);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
