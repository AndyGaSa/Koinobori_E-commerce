const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('server');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;
server.use(morgan('dev'));
server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});
server.get('/profile', (req, res) => {
  res.render('profile');
});
server.listen(
  port,
  () => debug(`Server is running in http://localhost:${port}`),
);
