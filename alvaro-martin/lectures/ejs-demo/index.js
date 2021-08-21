const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/databaseConfig');

const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(morgan('dev'));

const userRouter = require('./src/routes/userRoutes');

server.use('/api/users-todo', userRouter);

server.listen(
  port,
  () => debug(`Server is running in http://localhost:${port}`),
);
