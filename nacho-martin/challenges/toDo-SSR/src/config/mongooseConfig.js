const { connect } = require('mongoose');
const debug = require('debug')('toDoApi:ddbbConfig');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => debug('Database is connected and working'),
    (error) => debug(error)
  );
