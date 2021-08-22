require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('toDoList');
const cors = require('cors');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

require('./configDDBB/configDDBB');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use(
  express.static(path.join(__dirname, '/public'))
);

server.use(
  '/css',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/css')
  )
);

server.unsubscribe(
  '/js',
  express.static(
    path.join(__dirname, '/node_modules/bootstrap/dist/js')
  )
);

server.set('view engine', 'ejs');

const indexRouter = require('./routes/indexRouter');

server.use('/index', indexRouter);

const userRouter = require('./routes/userRouter');

server.use('/user', userRouter);

const taskRouter = require('./routes/taskRouter');

server.use('/task', taskRouter);

server.listen(port, () => debug(`Server is running on http://localhost:${port}`));
