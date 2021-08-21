require('dotenv').config();
const express = require('express');
const debug = require('debug')('socialNet');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/mongooseConfig');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');

server.use('/api/users', userRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
