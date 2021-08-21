const express = require('express');
const morgan = require('morgan');
const debug = require('debug');
const path = require('path');
require('./configs/dbConfig');

const server = express();

require('dotenv').config();

const port = process.env.port || 5000;

server.set('view engine', 'ejs');
server.set('views', `${__dirname}/views`);

server.use(morgan('dev'));

server.use(
  express.static(path.join(__dirname, '/public')),
);
server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
server.use(
  '/js',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')),
);

const mainRouter = require('./routers/mainRouter');
const taskRouter = require('./routers/taskRouter');

server.use('/', mainRouter);
server.use('/task', taskRouter);

server.listen(port, () => debug('server is running'));
