const { connect } = require('mongoose');
const debug = require('debug')('server:ddbb');

connect(process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => debug('database connecgted'))
  .catch(() => debug('no connection posible'));
