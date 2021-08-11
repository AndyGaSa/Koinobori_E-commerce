const { connect } = require('mongoose');
const debug = require('debug')('beersApi:DDBBConfig');

connect(
  process.env.DDBB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => debug('Database conection established'))
  .catch(({ message }) => debug(message));
