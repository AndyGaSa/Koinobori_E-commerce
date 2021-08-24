require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

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
    name: 'Ignacio',
    age: '33',
    married: false,
  };
  res.render('profile', { user: userData });
});
server.listen(port, () => debug('server is runnnig'));
