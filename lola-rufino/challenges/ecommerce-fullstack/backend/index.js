require('dotenv').config();

const express = require('express');
const debug = require('debug')('ecommerceFullStack');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/mongooseConfig');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const productsRouter = require('./src/routes/productsRoute');
/* const usersRouter = require('./src/routes/usersRoute');
const cartRouter = require('./src/routes/cartRoute'); */

server.use('/api/products', productsRouter);
/* server.use('/api/users', usersRouter);
server.use('/api/cart', cartRouter); */

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
