/* eslint-disable no-console */
require('dotenv').config();
const debug = require('debug')('server');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT;
const server = express();

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
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/profile', (req, res) => {
  const userData = {
    name: 'Pere',
    age: 30,
    State: 'single',
    Andorra: 'pending',
  };
  res.render('profile', { user: userData });
});

server.listen(
  port,
  () => debug(`Server is running on port ${port}`),
);
