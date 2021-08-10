const express = require('express');
require('dotenv').config();

const server = express();
const port = process.PORT;

server.use(express.json());

const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => console.log(`Server is running on http://localhost:${port}`)
);
