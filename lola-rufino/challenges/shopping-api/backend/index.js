require('dotenv').config(); // para que las variables de entorno estén disponibles
const express = require('express');
const debug = require('debug')('productsShop'); // "apaga" y "enciende" los mensajes que yo quiera para que se vean por consola
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5001;
// invoco el puerto en la variable de entorno y un valor por defecto

require('./src/config/ddbbConfig');

server.use(cors());
server.use(morgan('dev')); // ejecuta un middleware cuando entra una request, para mostrar información por la consola. usaremos dev
server.use(express.json());
// middleware que cuando llega una petición, si es json, lo pone en req.body

const productsRouter = require('./src/routes/productsRoute');
const usersRouter = require('./src/routes/usersRoute');
const cartRouter = require('./src/routes/cartRoute');
// los router determinan las routes(rutas) de cada uno,
// y de ahí pasan a los controladores
server.use('/api/products', productsRouter);
server.use('/api/users', usersRouter);
server.use('/api/cart', cartRouter);

server.listen(port, () => debug(`Server running on ${chalk.magenta(`http://localhost:${port}`)}`));
// mensaje que se va a mostrar por consola cuando se levante el servidor
