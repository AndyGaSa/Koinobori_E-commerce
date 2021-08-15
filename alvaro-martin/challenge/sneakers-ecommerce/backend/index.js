const express = require('express'); // Middleware express
require('dotenv').config(); // Acceder variables .env
const debug = require('debug')('storeApi');
const chalk = require('chalk');
const morgan = require('morgan'); // Middleware morgan para ver en consola las peticiones

require('./src/config/ddbb.config'); // Configuración de ddbb (mongoose)

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json()); // Si viene petición con datos .json los añade en el body

const sneakersRouter = require('./src/routers/sneakerRouter');
const cartRouter = require('./src/routers/cartRouter');

server.use('/api/sneakers', sneakersRouter); // Routers
server.use('/api/carts', cartRouter); // Routers

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`),
);
