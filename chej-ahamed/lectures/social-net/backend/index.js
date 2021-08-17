require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const debug = require('debug')('server');

require('./src/configs/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;
server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routers/userRouter');

server.use('/api/users', userRouter);

server.listen(
  port,
  () => debug(`Server is running on http:localhost:${port}`)
);
