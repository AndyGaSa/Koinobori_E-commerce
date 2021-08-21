require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const path = require('path');

const server = express();

const port = process.env.PORT || 5001;

server.use(morgan('dev'));
server.use('/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));

server.use('/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  res.render('index');
});

server.get('/profile', (req, res) => {
  const userData = {
    name: 'Nacho',
    age: 29,
    wife: 'Elisabeth'
  };
  res.render('profile', { user: userData });
});

server.listen(port, () => debug(`Server is running on port ${port}, manin`));
