const { connect } = require('mongoose');
const debug = require('debug')('server:ddbb');

connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
  .then(() => debug('Database connected'))
  .catch((error) => debug(error));
