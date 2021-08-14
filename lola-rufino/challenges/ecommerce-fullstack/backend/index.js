require('dotenv').config();

const express = require('express');
const debug = require('debug')('ecommerceFullStack');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5001;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
