// imports
require('dotenv').config();
const express = require('express');
const debug = require('debug')('passportServer');
const chalk = require('chalk');
const morgan = require('morgan');
const passport = require('passport');

// DDBB connection
require('./src/config/databaseConfig');
require('./src/passport/localStrategy');

// server vars
const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());
server.use(passport.session());
server.use(session({

}));
server.use(passport.initialize());
passport.serializeUser((user, next) => {
  next(null, user.name);
});
passport.deserializeUser(async (name, next) => {
  try {

  } catch (error) {
    next(null, user);
  }
});

// routes
const authRouter = require('./src/routes/authRouter');
// Server Main Route
server.use('/', authRouter);

// start Server
server.listen(
  port,
  () => { debug(`Server is running on ${chalk.green(`http://localhost:${process.env.PORT}`)}`); }
);
