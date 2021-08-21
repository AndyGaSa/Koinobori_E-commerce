require('dotenv').config();
const express = require('express');

// const morgan = ('morgan');
// en el lugar de http
const debug = require('debug')('server');
const path = require('path');

/* const http = require('http'); */

const server = express();
const port = process.env.PORT || 5000;

// server.use(morgan('dev'));
server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);

server.use(
  express.static(path.join(__dirname, '/public'))
);

server.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))
);
server.set('view engine', 'ejs');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    const userData = {
      name: 'Jenn',
      age: 35,
      couple: 'André'
    };
    res.render('index', { user: userData });
  });
router.route('/profile')
  .get((req, res) => {
    res.render('profile'); // este nombre tiene q coincidir con una carpeta views
  });

server.use('/', router);

/* const server = http.createServer((req, res) => {
  res.end('Hello Eugenia'); launch server on pure Node.js
}); */

server.listen(port, () => debug('Server is running de puta madre..'));
