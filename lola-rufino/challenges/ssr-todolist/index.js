require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug');
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

server.use(
  '/js',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/js')
  )
);

server.set('view engine', 'ejs');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    const userData = {
      email: 'lola.ruf.ar@gmail.com',
      name: 'Lola',
      tasks: 'Tidy livingroom'
    };
    res.render('index', { user: userData });
  });
router.route('/profile')
  .get((req, res) => {
    res.render('profile');
  });

server.use('/', router);

server.listen(port, () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`));
