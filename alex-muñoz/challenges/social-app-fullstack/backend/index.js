const express = require('express');
require('dotenv').config();
const debug = require('debug')('socialApp');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const socialAppRouter = require('./src/routes/socialAppRouter');

server.use('/api/social-app', socialAppRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
