require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.use(
  '/css',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/css')
  )
);

server.use(
  '/js',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/js')
  )
);

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/profile', (req, res) => {
  const userData = {
    name: 'Marc',
    age: 31,
    wife: 'Ana',
    camperVan_Diesel: 'Pending'
  };
  res.render('profile', { user: userData });
});

server.listen(port, () => debug(`Server is running on http://localhost:${port}`));
