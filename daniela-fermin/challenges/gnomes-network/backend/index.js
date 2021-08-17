const express = require('express');
require('dotenv').config();
const debug = require('debug')('gnomesApi');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');

require('./src/config/ddbb.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const gnomesRouter = require('./src/routers/gnomesRouter');

server.use('/gnomesApi/', gnomesRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
