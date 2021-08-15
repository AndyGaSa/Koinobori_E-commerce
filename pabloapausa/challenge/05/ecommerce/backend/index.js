require('dotenv').config(); // Import environment variables.
require('./src/config/ddbbConfig'); // Import MongoDB configuration.
const morgan = require('morgan'); // Import Morgan dependency.
const express = require('express'); // Import Express dependency.
const debug = require('debug')('ecommerce'); // Import Debug dependency.
const cors = require('cors'); // Import Cors dependency.

const server = express(); // Assign 'server' function.
const port = process.env.PORT || 6000; // Assign PORT variable.
// const cartRouter = require('./src/routers/cartRouter'); // Import cart router.
// const userRouter = require('./src/routers/userRouter'); // Import user router.
const productRouter = require('./src/routers/productRouter'); // Import product router.

server.use(cors()); // Initialize Cors dependency.
server.use(morgan('dev')); // Initialize Morgan dependency.
server.use(express.json()); // Initialize Express dependency.

// server.use('/store/carts', cartRouter); // Assign cart rute.
// server.use('/store/users', userRouter); // Assign user rute.
server.use('/store/products', productRouter); // Assign product rute.

server.listen(port, () => debug(`Server is running on ${port}`));
