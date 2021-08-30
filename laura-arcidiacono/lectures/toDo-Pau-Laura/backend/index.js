const express = require('express');
require('dotenv').config();
const debug = require('debug')('toDosApi');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const toDosRouter = require('./src/routes/toDosRoutes');

server.use('/api/todos', toDosRouter);
server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`),
);