/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config();
require('./config/mongoose.config');
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const path = require('path');
const TodoTask = require('./models/TodoTask');

const server = express();
const port = process.env.PORT || 5000;

dotenv.config();

server.use(morgan('dev'));

server.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
server.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
server.use(
  '/static',
  express.static(path.join(__dirname, '/public/stylesheets')),
);
server.set('view engine', 'ejs');

server.use(express.urlencoded({ extended: true }));

const router = express.Router();
router.route('/')
  .get((req, res) => {
    res.render('index');
  });

router.route('/profile')
  .get((req, res) => {
    const userData = {
      name: 'Gilberto',
      age: 35,
      wife: 'Laritza',
      boat: false,
    };
    res.render('profile', { user: userData });
  });

router.route('/todo')
  .get((req, res) => {
    res.render('todo');
  });

server.route('/edit/:id')
  .get((req, res) => {
    const { id } = req.params;
    TodoTask.find({}, (err, tasks) => {
      res.render('todoEdit.ejs', { todoTasks: tasks, idTask: id });
    });
  })
  .post((req, res) => {
    const { id } = req.params;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
      if (err) return res.send(500, err);
      return res.redirect('/todo');
    });
  });
server.route('/todo/:id').get((req, res) => {
  const { id } = req.params;
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    return res.redirect('/todo');
  });
});
server.get('/todo', (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render('todo.ejs', { todoTasks: tasks });
  });
});

server.post('/todo', async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  try {
    await todoTask.save();
    res.redirect('/todo');
  } catch (err) {
    res.redirect('/todo');
  }
});

server.use('/', router);

server.listen(port, () => debug(`Server is running on http://localhost:${port}...`));
