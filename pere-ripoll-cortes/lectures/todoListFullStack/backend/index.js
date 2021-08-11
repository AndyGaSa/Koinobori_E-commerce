require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('toDoApi');
const todoRouter = require('./src/routes/todoRouter');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', todoRouter);

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`),
);
