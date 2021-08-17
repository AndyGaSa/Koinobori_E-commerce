require('dotenv').config();
const express = require('express');
const debug = require('debug')('social-net');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRoutes');

server.use('/api/user', userRouter);

server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
