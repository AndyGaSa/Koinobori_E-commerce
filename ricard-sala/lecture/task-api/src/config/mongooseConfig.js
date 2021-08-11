const { connect } = require('mongoose');

const debug = require('debug')('taskApi:ddbbConfig');

connect(process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => debug('Date Base connection established'),
    (error) => debug(error),
  );
