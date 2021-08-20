const express = require('express');
require('dotenv').config();
require('./src/config/mongooseConfig');

const debug = require('debug')('taskApi');
const debugDev = require('debug')('dev');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

debugDev('esto es un mensaje de riki y bryan');

server.use(morgan('dev'));
server.use(express.json());

const taskRouter = require('./src/routes/taskRoutes');

server.use('/api/task', taskRouter);

server.listen(
  port,
  () => debug(`server up esto eh calidah http://localhost${port}`),
);
