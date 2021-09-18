const express = require('express');
require('dotenv').config();
const debug = require('debug')('todoApi');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/passportConfig')(server);

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');
const productsRouter = require('./src/routes/productRouter');
const cartRouter = require('./src/routes/cartRouter');
const authRouter = require('./src/routes/authRouter');

server.use('/api/user', userRouter);
server.use('/api/products', productsRouter);
server.use('/api/carts', cartRouter);
server.use('/api', authRouter);

server.listen(
  port,
  () => debug(`Server is running on ${(`http://localhost:${port}`)}`),
);
