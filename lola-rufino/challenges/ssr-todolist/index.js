require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');

const server = express();
const port = process.env.PORT || 5001;

server.use(morgan('dev'));

server.set('view engine', 'ejs');

const userRoutes = require('./src/routes/userRoutes');

server.use('/user', userRoutes);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
