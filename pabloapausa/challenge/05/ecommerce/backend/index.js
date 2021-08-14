require('dotenv').config(); // Import 'env' variables.
const express = require('express'); // Import Express dependency.
const morgan = require('morgan'); // Import Morgan dependency.
const debug = require('debug')('ecommerce'); // Import Debug dependency.
require('./src/config/ddbbConfig'); // Import MongoDB Configuration.

const port = process.env.PORT || 6000;
const server = express();
server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => { res.send('Ok'); });
server.listen(port, () => { debug(`Server is running on http://localhost:${port}`); });
