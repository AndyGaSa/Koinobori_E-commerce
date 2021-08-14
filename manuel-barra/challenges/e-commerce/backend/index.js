const express = require('express');
require('dotenv').config();
const debug = require('debug')('store');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/momgooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const productList = require('./src/routes/productsRouter');

server.use('/api/', productList);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
