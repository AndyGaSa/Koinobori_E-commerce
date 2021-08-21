require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/ddbbConfig');

server.use(morgan('dev'));

server.set('view engine', 'ejs');

const userRouter = require('./src/routes/userRouter');

server.use('/user', userRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
