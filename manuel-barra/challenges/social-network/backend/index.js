require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const userRouter = require('./routes/userRouter');

require('./config/databaseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));

server.use('/api/users', userRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`)
);
