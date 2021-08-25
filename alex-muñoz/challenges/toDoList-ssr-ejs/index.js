require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('toDo');
const chalk = require('chalk');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/mongooseConfig');

server.use(morgan('dev'));
server.use(express.json());

const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true }));
const userRouter = require('./src/routers/user');
const taskListRouter = require('./src/routers/taskList');
const taskRouter = require('./src/routers/task');
const homeRouter = require('./src/routers/home');

server.use('/home', homeRouter);
server.use('/user', userRouter);
server.use('/taskList', taskListRouter);
server.use('/task', taskRouter);

server.set('view engine', 'ejs');

server.listen(
  port, () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
