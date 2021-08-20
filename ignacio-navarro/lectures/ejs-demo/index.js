require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  res.render('index');
});
server.get('/profile', (req, res) => {
  res.render('profile');
});
server.listen(port, () => debug('server is runnnig'));
