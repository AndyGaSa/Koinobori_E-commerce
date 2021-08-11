const express = require('express');
require('dotenv').config();
const debug = require('debug')('beers');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 3001;

server.use(morgan('dev'));
server.use(express.json());

const beerRouter = require('./src/routes/beersRouter');
const randomRouter = require('./src/routes/randomRouter');

server.use('/api/', beerRouter);
server.use('/api/', randomRouter);

server.listen(port, () => debug(`Server runing on ${chalk.green(`127::1:${port}`)}`));
