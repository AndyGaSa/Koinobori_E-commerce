/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
server.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
server.set('view engine', 'ejs');

const router = express.Router();
router.route('/')
  .get((req, res) => {
    res.render('index');
  });
router.route('/profile')
  .get((req, res) => {
    const userData = {
      name: 'Gilberto',
      age: 35,
      wife: 'Laritza',
      boat: false,
    };
    res.render('profile', { user: userData });
  });

server.use('/', router);

server.listen(port, () => debug(`Server is running on http://localhost:${port}...`));
