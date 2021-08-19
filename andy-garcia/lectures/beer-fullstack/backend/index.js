const express = require('express');
require('dotenv').config();
const debug = require('debug')('beersApi');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
require('./config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const beersRouter = require('./src/routes/beersRouter');

server.use('/api/', beersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`),
);
