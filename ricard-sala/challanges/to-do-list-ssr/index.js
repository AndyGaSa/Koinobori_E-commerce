require('dotenv').config();
const debug = require('debug')('server');
const morgan = require('morgan');
const express = require('express');

const userRouter = require('./src/routers/userRouters');
const toDoRouter = require('./src/routers/toDoRouters');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5014;
server.use(morgan('dev'));
server.use(express.json());

server.use('/api', userRouter);
server.use('/api', toDoRouter);

server.listen(
  port,
  () => debug(`server is runing at http://localhost${port}`),
);
