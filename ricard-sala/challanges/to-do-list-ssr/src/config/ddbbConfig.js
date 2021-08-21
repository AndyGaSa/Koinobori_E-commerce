const { connect } = require('mongoose');
const debug = require('debug')('server');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('conection run!!!!'),
  (error) => debug(error),
);
