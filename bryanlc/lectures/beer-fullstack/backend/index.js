const express = require('express');
require('dotenv').config();

const debug = require('debug')('beersApi');
const debugDev = require('debug')('dev');
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

debugDev('Esto es un mensaje de desarrollo de bryan');

server.use(morgan('tiny'));
server.use(express.json());

const beersRouter = require('./src/routes/beersRoutes');

server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.cyan(`http://localhost:${port}`)}`)
);
