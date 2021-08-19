require('dotenv').config();
require('./src/config/dbConfig');
const morgan = require('morgan');
const express = require('express');
const debug = require('debug')('social');
// const cors = require('cors');

const port = process.env.PORT || 6000;
const server = express();

// server.use(cors());
server.use(express.json()); // Initialize Express dependency.
server.use(morgan('dev')); // Initialize Morgan dependency.

const userRouter = require('./src/routers/userRouter');

server.use('/api/users', userRouter);
server.listen(
  port,
  () => debug('Server is working'),
);
