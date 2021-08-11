require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('toDo');
const chalk = require('chalk');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 6000;
const toDoRouter = require('./src/routes/toDoRouter');

server.use(express.json());
server.use(morgan('dev'));
server.use('/api/toDo', toDoRouter);

server.listen(port, () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`));
