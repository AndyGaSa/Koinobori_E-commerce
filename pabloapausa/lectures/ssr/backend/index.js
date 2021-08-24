require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const path = require('path');

// Babel convierte el código de JSX  React

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.use(express.static(path.join(__dirname,
  '/public')));
server.use('/css', express.static(path.join(__dirname,
  '/node_modules/bootstrap/dist/css')));
server.use('/js', express.static(path.join(__dirname,
  '/node_modules/bootstrap/dist/js')));
server.set('view engine', 'ejs');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    const user = {
      name: 'Pablo',
      username: 'aaa',
      year: '2001',
    };
    res.render('index', { user });
  });

router.route('/profile')
  .get((req, res) => {
    res.render('profile');
  });

server.use('/', router);

server.listen(port, () => debug(`Server is running is on http://localhost:${port}`));
