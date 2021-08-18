require('dotenv').config();
const express = require('express');
const debug = require('debug')('gnomosNet');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');

require('./src/configDDBB/configDDBB');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const userRouter = require('./src/routes/userRouter');

server.use('/api/users', userRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
