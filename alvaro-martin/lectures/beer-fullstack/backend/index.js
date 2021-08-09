const express = require('express');

const server = express();
const port = 4242;

server.use(express.json());

const beersRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beersRouter);

server.listen(
  port,
  () => console.log(`Server is running on http://localhost:${port}`),
);
