require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');

const userRouter = require('./src/routers/userRouters');
const toDoRouter = require('./src/routers/toDoRouters');
const { dashboardRouter } = require('./src/routers/viewRouter');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5014;

server.use(morgan('dev'));
server.set('view engine', 'ejs');
server.use(express.json());

server.use('/', dashboardRouter);
server.use('/api', userRouter);
server.use('/api', toDoRouter);

server.listen(
  port,
  () => debug(`server is runing at http://localhost${port}`),
);
