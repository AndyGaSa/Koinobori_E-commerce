require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('serverSSR');
const chalk = require('chalk');
const path = require('path');

// server data
const server = express();
const port = process.env.PORT || 5000;

server
  .use(morgan('dev'))
  .use(
    express.static(path.join(__dirname, '/public'))
  )
  .use(
    '/js',
    express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
  )
  .use(
    '/css',
    express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
  );
// server.use(express.json());

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/profile', (req, res) => {
  const userData = {
    name: 'Lluc',
    age: 40,
    wife: 'none of your business',
    ps5: false
  };
  res.render('profile', { user: userData });
});

// start server
server.listen(
  port,
  () => debug(`Server is running on ${chalk.green(`http://localhost:${port}`)}`)
);
