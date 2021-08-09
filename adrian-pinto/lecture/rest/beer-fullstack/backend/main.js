const express = require('express');

const server = express();
const port = 3001;

server.use(express.json());

const beerRouter = require('./src/routes/beersRouter');

server.use('/api/beers', beerRouter);

server.listen(port, () => {
  console.log(`server is runing on 127 in port ${port}`);
});
