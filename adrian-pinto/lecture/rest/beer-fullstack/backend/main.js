const express = require('express');
require('dotenv').config();
const debug = require('debug')('beers');
const chalk = require('chalk');

const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());

const beerRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beerRouter);

server.listen(port, () => debug(`Server runing on ${chalk.gren(`127:${port}`)}`));
