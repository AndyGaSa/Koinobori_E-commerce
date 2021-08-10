const express = require('express');
require('dotenv').config();
const debug = require('debug')('beers');

const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());

const beerRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beerRouter);

server.listen(port, () => debug(`Server runing on 127:${port}`));
