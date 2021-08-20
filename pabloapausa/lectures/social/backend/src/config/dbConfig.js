const { connect } = require('mongoose');
const debug = require('debug')('social:ddbbConfig');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('You are connected'),
  (error) => debug(error),
);
