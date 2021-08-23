require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const router = require('./src/routes/router');
require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/passportConfig')(server);

server.use(express.json());

server.use('/', router);

server.listen(port, () => debug(`Server is running on port ${port}`));
