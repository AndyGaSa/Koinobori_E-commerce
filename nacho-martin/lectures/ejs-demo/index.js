require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

const server = express();

const port = process.env.PORT || 5001;

server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('This is my server. Please, leave it alone');
});

server.listen(port, () => debug(`Server is running on port ${port}, manin`));
