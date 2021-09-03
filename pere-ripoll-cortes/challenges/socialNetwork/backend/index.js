require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/DDBBconfig');

const server = express();
const port = process.env.PORT;

const userRouter = require('./src/routers/userRouter');

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', userRouter);

server.listen(port, debug(`Server is running on port:${port}`));
