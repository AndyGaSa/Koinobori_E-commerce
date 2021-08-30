const express = require('express');
require('dotenv').config();
require('./src/config/mongooseConfig');
require('./src/config/localStrategy');

const debug = require('debug')('gnomosSN');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

require('./src/config/passportConfig')(server);
const userRoutes = require('./src/routes/userRoute');
const authRoutes = require('./src/routes/authRoute');

server.use('/api/users', userRoutes);
server.use('/', authRoutes);
server.listen(
  port,
  () => debug(`Server is runing on http://localhost:${port}`)

);
