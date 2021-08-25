require('dotenv').config();

// config ans usefull libraries
const express = require('express');
const path = require('path');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');

// console info libraries
const morgan = require('morgan');
const debug = require('debug')('toDoServer');
const chalk = require('chalk');

// Session Time
const oneDaySession = 1000 * 60 * 60 * 24;

// DDBB connection
require('./src/config/ddBbConfig');

// server data
const server = express();
const port = process.env.PORT || 5000;

// Routes
const routes = require('./src/routes/routes');

// Server Set
server
  .set('view engine', 'ejs');

// Server Config
server
  .use(morgan('dev'))
// parsing incoming data
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
// public files
  .use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
  .use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
  .use(express.static(path.join(__dirname, '/public')))
// session config
  .use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: oneDaySession },
    resave: false
  }))
  .use(cookieParser()) // allows server to work with cookies
// routes
  .use('/', routes);

// Start Server
server.listen(
  port,
  () => {
    debug(`Server is running on ${chalk.green(`http://localhost:${port}`)}`);
  }
);
