require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.use(
  express.static(path.join(__dirname, '/public'))
);
server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);
server.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))
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
      name: 'Alex',
      age: 29
    };
    res.render('profile', { user: userData });
  });

server.use('/', router);

server.listen(port, () => debug(`Server is running on http//:localhost:${port}...`));
