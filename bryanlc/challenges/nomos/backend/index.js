const express = require('express');
require('dotenv').config();
require('./src/config/mongoose.config');

const debug = require('debug')('gnomosSN');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRoutes = require('./src/routes/usersRoute');

server.use('/api/users', userRoutes);

server.listen(
  port,
  () => debug(`Server is runing on http://localhost:${port}`)

);
