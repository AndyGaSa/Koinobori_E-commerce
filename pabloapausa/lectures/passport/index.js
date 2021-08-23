require('dotenv').config();
require('./src/config/database');

const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('passport:ddbb');
const router = require('./src/routes/router');

const server = express();
const port = process.env.PORT || 6000;

require('./src/config/passport')(server);

server.use(express.json());
server.use(morgan('dev'));
server.use('/', router);

server.listen(port, () => {
  debug(`https://localhost:${port}`);
});
