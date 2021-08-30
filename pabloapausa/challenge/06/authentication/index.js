require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const router = require('./src/routes/router');

const server = express();
const port = process.env.PORT || 6000;

require('./src/config/mongooseConfig');
require('./src/config/passportConfig')(server);

server.use(morgan('dev'));
server.use(express.json());
server.use('/', router);
server.listen(port, debug(`https://localhost:${port}`));
