const express = require('express');
require('dotenv').config();

const debug = require('debug')('beersApi');
const debugDev = require('debug')('dev');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
debugDev('Esto es un cambio de desarrollooooo');

const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
