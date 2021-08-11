const express = require('express');
require('dotenv').config();
const debug = require('debug')('task');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 3001;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const taskRouter = require('./src/routes/tasksRoute');

server.use('/api/', taskRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
