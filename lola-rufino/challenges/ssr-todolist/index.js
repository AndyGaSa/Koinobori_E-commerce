require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/ddbbConfig');

server.use(morgan('dev'));
server.use(express.json());

server.set('view engine', 'ejs');

const userRouter = require('./src/routes/userRouter');
const taskRouter = require('./src/routes/taskRouter');

server.use('/user', userRouter);
server.use('/task', taskRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
