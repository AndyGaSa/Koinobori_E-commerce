require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));

server.set('view engine', 'ejs');

server.listen(port, () => debug(`Server is running on http://localhost:${port}`));
