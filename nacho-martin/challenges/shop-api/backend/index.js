const express = require('express');
require('dotenv');
const debug = require('debug')('toDos');
const dev = require('debug')('dev');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/configMongoose');

const server = express();
const port = process.env.PORT || 5000;
dev('mensaje de desarrollo');
server.use(morgan('dev'));
server.use(express.json());

const usersRouter = require('./src/routes/usersRouter');

server.use('/api/users', usersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
