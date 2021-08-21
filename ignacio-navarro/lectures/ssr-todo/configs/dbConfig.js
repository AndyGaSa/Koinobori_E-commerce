const { connect } = require('mongoose');
const debug = require('debug')('server:dbConfig');

connect(
  process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('connection established'),
  (error) => debug(error),
);
