/* eslint-disable no-console */

const express = require('express');
const debug = require('debug')('beers');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);
server.listen(
  port,
  () => debug(`Server is running on http://localhost:${process.env.PORT}`),
);
