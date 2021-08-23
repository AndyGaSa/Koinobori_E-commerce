/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/ddbb.config');
require('./src/config/passport-strategies/localStrategy');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

require('./src/config/passport.config').passportConfig(server);

const authRouter = require('./src/router/auth.router');

server.use('/', authRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
