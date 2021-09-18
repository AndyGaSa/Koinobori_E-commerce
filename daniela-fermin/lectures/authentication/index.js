/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('Server');

require('./src/config/ddbbConfig');
require('./src/config/passport-strategies/localStrategy');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/passportConfig')(server);

server.use(morgan('dev'));
server.use(express.json());

const authRouter = require('./src/routers/authRouter');

server.use('/api', authRouter);

server.listen(
  port,
  () => debug(`Server is running on port ${port}`)
);
