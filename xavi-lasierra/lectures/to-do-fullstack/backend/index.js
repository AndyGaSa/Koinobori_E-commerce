const express = require('express');
require('dotenv').config();
const debug = require('debug')('toDoListApi');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));

const toDosRouter = require('./src/routes/toDos.routes');

server.use('/api/toDos', toDosRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`)
);
