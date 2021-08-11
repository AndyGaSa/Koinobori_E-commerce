const express = require('express');
require('dotenv').config();
const debug = require('debug')('toDos');
const dev = require('debug')('dev');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;
dev('mensaje de desarrollo');
server.use(morgan('tiny'));
server.use(express.json());

const toDosRouter = require('./src/routes/toDosRouter');

server.use('/api/toDos', toDosRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
