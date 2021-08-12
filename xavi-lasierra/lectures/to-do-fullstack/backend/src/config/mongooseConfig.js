const { connect } = require('mongoose');
const debug = require('debug')('toDoListApi:ddbbConfiguration');

connect(
  process.env.DDBB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => debug('Database connection established'))
  .catch(({ message }) => debug(message));
