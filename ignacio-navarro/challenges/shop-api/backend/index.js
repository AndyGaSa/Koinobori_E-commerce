const express = require('express');
require('dotenv').config();
require('./src/config/mongooseConfig');

const server = express();
const port = process.env.port || 5000;

const itemRouter = require('./src/routes/itemRouter');
const cartRouter = require('./src/routes/cartRouter');
const userRouter = require('./src/routes/userRouter');

server.use(express.json());
server.use('/api/item', itemRouter);
server.use('/api/cart', cartRouter);
server.use('/api/user', userRouter);

server.listen(port, () => console.log('server is running'));
