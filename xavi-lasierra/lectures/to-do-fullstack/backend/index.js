const express = require('express');
require('dotenv').config();
const debug = require('debug')('toDoListApi');
const chalk = require('chalk');

const server = express();
const port = process.env.PORT || 5000;

const toDosRouter = require('./src/routes/toDos.routes');

server.use('/api/toDos', toDosRouter);

server.use(express.json());

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`)
);
