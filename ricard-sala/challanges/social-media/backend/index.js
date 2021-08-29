require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/ddbb-config');

const server = express();
const port = process.env.PORT || 5000;
require('./src/config/passportConfig')(server);

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');

server.use('/api/user', userRouter);

server.listen(
  port,
  () => debug(`server is running on http://localhost:${port}`),
);
