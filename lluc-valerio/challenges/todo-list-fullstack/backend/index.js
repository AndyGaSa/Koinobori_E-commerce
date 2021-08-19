const express = require('express');
require('dotenv').config();
const debug = require('debug')('todoApi');
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

const toDoRouter = require('./routes/toDoRoutes');

require('./config/mongooseConfig');

server.use(morgan('dev'));
server.use(express.json());

server.use('/api/toDos', toDoRouter);

server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${port}`)}`); }
);
