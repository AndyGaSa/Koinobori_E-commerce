require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('toDoList');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.use(
  express.static(path.join(__dirname, '/public'))
);

server.use(
  '/css',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/css')
  )
);

server.unsubscribe(
  '/js',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/js')
  )
);

server.set('view engine', 'ejs');

const router = require('./routes/userRouter');

server.use('/', router);

server.listen(port, () => debug(`Server is running on http://localhost:${port}`));
