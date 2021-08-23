const { connect } = require('mongoose');
const debug = require('debug')('social-net:DDBB');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(
  () => debug('Database connection established')
).catch(
  (error) => debug(error)
);
