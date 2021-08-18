require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');

require('./src/configs/ddbbConfig');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));

const tasksRouter = require('./src/routers/taskRouter');

app.use('/api/tasks', tasksRouter);

app.listen(port, () => debug(`Server is running on http://localhost: ${port}`));
