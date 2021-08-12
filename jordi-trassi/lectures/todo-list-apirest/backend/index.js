const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('todoApi');
require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const todolistRouter = require('./src/routes/todoListRouter');

server.use('/api/todoList', todolistRouter);

server.listen(
  port,
  () => debug(`Server is running on ${(`http://localhost:${port}`)}`),
);
