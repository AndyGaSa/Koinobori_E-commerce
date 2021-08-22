require('dotenv').config();
const express = require('express');
const debug = require('debug')('toDo');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5001;
server.use(morgan('dev'));
server.use(express.json());

server.set('view engine', 'ejs');

server.use(bodyParser.urlencoded({ extended: true }));

const homeRouter = require('./src/routers/home');

server.use('/', homeRouter);

const userRouter = require('./src/routers/user');

server.use('/user', userRouter);

const taskListRouter = require('./src/routers/taskList');

server.use('/taskList', taskListRouter);

const taskRouter = require('./src/routers/task');

server.use('/task', taskRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port} `)
);
